import '../../node_modules/mediaelement/src/css/mediaelementplayer.css'
import QualitySelector from './quality_selector'

/** Class representing a MediaPlayer
 * @class MediaPlayer
 */
export default class MediaPlayer {
  constructor (options) {
    /**
     * Create a MediaPlayer
     * @param {object} options - an object with the manifest and target
     */
    this.manifest = options.manifest
    this.target = document.getElementById(options.target)
  }

  getSubtitles () {
    /**
     * this method gets the first subtitle track from the manifest. It will probaly need to more robust in the future
     *
     * @method MediaPlayer#getSubtitles
     * @return {string} subtitle - a URI that points to subtitles
     */
    var subtitle
    this.manifest.content[0].items.forEach((item) => {
      item.body.forEach((body) => {
        if (body.type === 'Text') {
          subtitle = body
        }
      })
    })
    return subtitle
  }

  getQualityChoices (canvas) {
    /**
     * this method retunrs an array containing the quality choices that are present in the manifest
     *
     * @method MediaPlayer#getQualityChoices
     * @return {array} choices
     */
    let choices = []
    let content = (canvas) ? canvas.content : this.manifest.content

    content[0].items.forEach((item) => {
      item.body.forEach((body) => {
        if (body.type === 'Choice') {
          body.items.forEach((item) => {
            choices.push(item)
          })
        }
      })
    })

    return choices
  }

  getVideoUri () {
    /**
     *  this method returns the URI with Medium quality from the manfest
     * @method MediaPlayer#getVideoUri
     * @return {string} uri - a URI for the medium quality video
     */
    var uri
    this.manifest.content[0].items.forEach((item) => {
      item.body.forEach((body) => {
        if (body.type === 'Choice') {
          body.items.forEach((item) => {
            if (item.label === 'Medium') {
              uri = item
            }
          })
        }
      })
    })
    return uri
  }

  getTimeFromUrl (url) {
     /**
     *
     *  this takes a url generated by this software (not a URI from the manifest) and returns an object with start/stop in seconds and the duration in milliseconds
     * @method MediaPlayer#getTimeFromUrl
     *
     * @return {object}
     */
    let re = new RegExp(/\d*,\d*/)
    let time = url.match(re)[0]
    let splitTime = time.split(',')
    return {
      start: splitTime[0],
      stop: splitTime[1]
    }
  }

  replaceTimeInUrl (url, childStartStopTime) {
   /**
     *
     *  this will replace the /time/345,536/ with a new time when given object like this: { start: 230 , stop : 340 }
     * @method MediaPlayer#replaceTimeInUrl
     *
     * @return {string}
     */
    let startTime = this.getTimeFromUrl(url)
    let ourStart = startTime.start
    let theirStop = childStartStopTime.stop
    let newTimeString = `/time/${ourStart},${theirStop}/`
    let oldTime = (`/time/${startTime.start},${startTime.stop}/`)

    return url.replace(oldTime, newTimeString)
  }

  addUrlsForParents () {
      /**
     *
     *  this will add urls to labels in the structure navigation if they have the class .implicit
     * @method MediaPlayer#addUrlsForParents
     */
    try {
      var parentStopTimes = document.querySelectorAll('.implicit')
      parentStopTimes.forEach((el) => {
        let lastTimeIndex = el.querySelectorAll('.explicit').length - 1
        let childStartStopTime = this.getTimeFromUrl(el.querySelectorAll('.explicit')[lastTimeIndex].querySelector('a').href)
        let newTime = this.replaceTimeInUrl(el.querySelector('.media-structure-uri').href, childStartStopTime)

        let label = el.querySelector('li').textContent
        el.querySelector('li').textContent = ''

        let link = document.createElement('a')
        link.setAttribute('class', 'media-structure-uri')
        link.setAttribute('href', newTime)
        link.text = label
        el.querySelector('li').appendChild(link)
      })
    } catch (e) {
      console.log(e)
    }
  }

  getMediaFragment (uri) {
    /**
     *
     *  this takes a uri with a media fragment that looks like #=120,134 and returns an object with start/stop in seconds and the duration in milliseconds
     * @method MediaPlayer#getMediaFragment
     *
     * @return {object}
     */

    if (uri !== undefined) {
      const fragment = uri.split('#t=')[1]
      if (fragment !== undefined) {
        const splitFragment = fragment.split(',')
        return { 'start': splitFragment[0],
          'stop': splitFragment[1] }
      } else {
        return undefined
      }
    } else {
      return undefined
    }
  }

  createStructure (manifest, list, canvasId) {
    /**
     * Recurses the manifest structure and creates an html tree
     *  @method MediaPlayer#createStructure
     *
     *  @return {string} list - a string version of the html tree
     */
    manifest.map((data, index) => {
      if (data.type === 'Range') {
        if (manifest[index].members[0].id !== undefined) {
          canvasId = manifest[index].members[0].id
        }
      }
      if (data.hasOwnProperty('members')) {
        // Parent elements
        if (this.getMediaFragment(canvasId) !== undefined) {
          let mediaFragment = this.getMediaFragment(canvasId)

          let canvasIndex = this.getCanvasIndex(canvasId)
          let canvasHash = (canvasIndex !== '') ? `/canvas/${canvasIndex}` : ''

          list.push(`<ul class='explicit av-structure'><li class='av-structure-label'><a data-turbolinks='false' data-target="#" href="#avalon/time/${mediaFragment.start},${mediaFragment.stop}/quality/Medium${canvasHash}" class="media-structure-uri" >${data.label}</a></li>`)
          this.createStructure(data.members, list, canvasId)
        } else {
          list.push(`<ul class='implicit av-structure'><li class='av-structure-label'>${data.label}</li>`)
          this.createStructure(data.members, list, canvasId)
        }
      }
    })
    list.push('</ul>')
    return list.join('')
  }

  getCanvasIndex (canvasId = '') {
    /**
     * Parse canvasId URI for the canvas index
     *
     * @method MediaPlayer#getCanvasIndex
     * @param {string} canvasId - key in manifest
     * @returns {string} canvasIndex - URI canvas index
     */
    let canvasPos = canvasId.indexOf('canvas')
    let canvasIndex = ''

    if (canvasPos > -1) {
      canvasIndex = canvasId.slice(canvasId.indexOf('/', canvasPos) + 1, canvasId.indexOf('#', canvasPos))
    }
    return canvasIndex
  }

  getCanvasByIndex (index) {
    /**
     * Get a canvas object from manifest 'canvases' array
     *
     * @method MediaPlayer#getCanvasIndex
     * @param {string} index - target canvas index
     * @returns {object} canvasObject or empty object
     */
    if (!index) { return {} }

    // TODO: Eventually we'll want to track current sequence index as well.  For now assume first sequence
    const canvases = this.manifest.sequences[0].canvases
    let canvasObject = {}

    canvases.forEach((canvas) => {
      const canvasIndex = canvas.id.slice(canvas.id.lastIndexOf('/') + 1)
      if (canvasIndex === index) {
        canvasObject = canvas
      }
    })
    return canvasObject
  }

  qualitySelectorMarkup () {
    let qs = new QualitySelector()
    let choices = qs.qualityChoices(this.manifest, '', [])

    return qs.renderChoices(choices)
  }

  renderStructure (manifest, list, canvasId) {
    /**
     * Recurses the manifest structure and creates an html tree
     * @method MediaPlayer#renderStructure
     *
     */
    manifest.map((data, index) => {
      if (data.type === 'Range') {
        canvasId = manifest[index].members[0].id
      }
      if (data.hasOwnProperty('members')) {
        if (this.getMediaFragment(canvasId) !== undefined) {
          list.push(`<ul><li><a class="media-structure-uri" data-media-fragment="${canvasId}">${data.label}</a></li>`)
          this.renderStructure(data.members, list, canvasId)
        } else {
          list.push(`<ul><li>${data.label}</li>`)
          this.renderStructure(data.members, list, canvasId)
        }
      }
    })
    list.push('</ul>')
    return list.join('')
  }
}
