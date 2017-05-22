import Avalon from '../app/avalon/avalon'

describe('an Avalon media audio player', () => {
  var manifest = {
    "id":"http://dlib.indiana.edu/iiif_av/canvas/1",
    "type":"Manifest",
    "label":"Symphony no. 3 - Mahler, Gustav, 1860-1911",
    "description":"Published by the Indiana University School of Music. Recorded Jan. 17-18, 1995, in the Musical Arts Center, Bloomington, Ind. Compact disc",
    "sequences": [
      {
        "id": "http://dlib.indiana.edu/iiif_av/mahler-symphony-3/seq1",
        "type": "Sequence",
        "canvases": [
          {
            "id": "https://dlib.indiana.edu/iiif_av/mahler-symphony-3/canvas/1",
            "type": "Canvas",
            "duration": 1985,
            "content":[
              {
                "id":"https://dlib.indiana.edu/iiif_av/mahler-symphony-3/annopage/1",
                "type":"AnnotationPage",
                "items":[
                  {
                    "id":"https://dlib.indiana.edu/iiif_av/mahler-symphony-3/annopage/1/1",
                    "type":"Annotation",
                    "motivation":"painting",
                    "body":[
                      {
                        "type":"Choice",
                        "choiceHint":"user",
                        "items":[
                          {
                            "id":"http://dlib.indiana.edu/iiif_av/mahler-symphony-3/CD1/high/320Kbps.mp4",
                            "type":"Audio",
                            "format":"audio/mp4; codec..xxxxx",
                            "label":"High"
                          },
                          {
                            "id":"http://dlib.indiana.edu/iiif_av/mahler-symphony-3/CD1/medium/128Kbps.mp4",
                            "type":"Audio",
                            "format":"audio/mp4; codec..xxxxx",
                            "label":"Medium"
                          }
                        ]
                      }
                    ],
                    "target":"http://dlib.indiana.edu/iiif_av/canvas/1"
                  }
                ]
              }
            ]
          },
          {
            "id": "https://dlib.indiana.edu/iiif_av/mahler-symphony-3/canvas/2",
            "type": "Canvas",
            "duration": 3829,
            "content":[
              {
                "id":"https://dlib.indiana.edu/iiif_av/mahler-symphony-3/annopage/2",
                "type":"AnnotationPage",
                "items":[
                  {
                    "id":"https://dlib.indiana.edu/iiif_av/mahler-symphony-3/annopage/2/2",
                    "type":"Annotation",
                    "motivation":"painting",
                    "body":[
                      {
                        "type":"Choice",
                        "choiceHint":"user",
                        "items":[
                          {
                            "id":"http://dlib.indiana.edu/iiif_av/mahler-symphony-3/CD2/high/320Kbps.mp4",
                            "type":"Audio",
                            "format":"audio/mp4; codec..xxxxx",
                            "label":"High"
                          },
                          {
                            "id":"http://dlib.indiana.edu/iiif_av/mahler-symphony-3/CD2/medium/128Kbps.mp4",
                            "type":"Audio",
                            "format":"audio/mp4; codec..xxxxx",
                            "label":"Medium"
                          }
                        ]
                      }
                    ],
                    "target":"http://dlib.indiana.edu/iiif_av/canvas/2"
                  }
                ]
              }
            ]
          }
        ]
      }
    ],

    "structures":[
      {
        "id":"http://dlib.indiana.edu/iiif_av/mahler-symphony-3/range/0",
        "type":"Range",
        "viewingHint":"top",
        "label":"Symphony no. 3 - Mahler, Gustav",
        "members":[
          {
            "id":"http://dlib.indiana.edu/iiif_av/mahler-symphony-3/range/1",
            "type":"Range",
            "label":"CD1 - Mahler, Symphony No.3",
            "members":[
              {
                "id":"http://dlib.indiana.edu/iiif_av/mahler-symphony-3/range/1-1",
                "type":"Range",
                "label":"Track 1. I. Kraftig",
                "members":[
                  {
                    "id":"http://dlib.indiana.edu/iiif_av/mahler-symphony-3/canvas/1#t=0,374",
                    "type":"Canvas"
                  }
                ]
              },
              {
                "id":"http://dlib.indiana.edu/iiif_av/mahler-symphony-3/range/1-2",
                "type":"Range",
                "label":"Track 2. Langsam. Schwer",
                "members":[
                  {
                    "id":"http://dlib.indiana.edu/iiif_av/mahler-symphony-3/canvas/1#t=374,525",
                    "type":"Canvas"
                  }
                ]
              },
              {
                "id":"http://dlib.indiana.edu/iiif_av/mahler-symphony-3/range/1-3",
                "type":"Range",
                "label":"Track 3. Tempo I",
                "members":[
                  {
                    "id":"http://dlib.indiana.edu/iiif_av/mahler-symphony-3/canvas/1#t=525,711",
                    "type":"Canvas"
                  }
                ]
              },
              {
                "id":"http://dlib.indiana.edu/iiif_av/mahler-symphony-3/range/1-4",
                "type":"Range",
                "label":"Track 4. Schwungvoll",
                "members":[
                  {
                    "id":"http://dlib.indiana.edu/iiif_av/mahler-symphony-3/canvas/1#t=711,1188",
                    "type":"Canvas"
                  }
                ]
              },
              {
                "id":"http://dlib.indiana.edu/iiif_av/mahler-symphony-3/range/1-5",
                "type":"Range",
                "label":"Track 5. Immer dasselbe Tempo",
                "members":[
                  {
                    "id":"http://dlib.indiana.edu/iiif_av/mahler-symphony-3/canvas/1#t=1188,1406",
                    "type":"Canvas"
                  }
                ]
              },
              {
                "id":"http://dlib.indiana.edu/iiif_av/mahler-symphony-3/range/1-6",
                "type":"Range",
                "label":"Track 6. Wie zu Anfang",
                "members":[
                  {
                    "id":"http://dlib.indiana.edu/iiif_av/mahler-symphony-3/canvas/1#t=1406,1693",
                    "type":"Canvas"
                  }
                ]
              },
              {
                "id":"http://dlib.indiana.edu/iiif_av/mahler-symphony-3/range/1-7",
                "type":"Range",
                "label":"Track 7. Tempo I",
                "members":[
                  {
                    "id":"http://dlib.indiana.edu/iiif_av/mahler-symphony-3/canvas/1#t=01693,1985",
                    "type":"Canvas"
                  }
                ]
              }
            ]
          },

          {
            "id":"http://dlib.indiana.edu/iiif_av/mahler-symphony-3/range/2",
            "type":"Range",
            "label":"CD2 - Mahler, Symphony No.3 (cont.)",
            "members":[
              {
                "id":"http://dlib.indiana.edu/iiif_av/mahler-symphony-3/range/2-1",
                "type":"Range",
                "label":"Track 1. II. Tempo di Menuetto",
                "members":[
                  {
                    "id":"http://dlib.indiana.edu/iiif_av/mahler-symphony-3/canvas/2#t=0,566",
                    "type":"Canvas"
                  }
                ]
              },
              {
                "id":"http://dlib.indiana.edu/iiif_av/mahler-symphony-3/range/2-2",
                "type":"Range",
                "label":"Track 2. III. Comodo",
                "members":[
                  {
                    "id":"http://dlib.indiana.edu/iiif_av/mahler-symphony-3/canvas/2#t=566,1183",
                    "type":"Canvas"
                  }
                ]
              },
              {
                "id":"http://dlib.indiana.edu/iiif_av/mahler-symphony-3/range/2-3",
                "type":"Range",
                "label":"Track 3. Tempo I",
                "members":[
                  {
                    "id":"http://dlib.indiana.edu/iiif_av/mahler-symphony-3/canvas/2#t=1183,1635",
                    "type":"Canvas"
                  }
                ]
              },
              {
                "id":"http://dlib.indiana.edu/iiif_av/mahler-symphony-3/range/2-4",
                "type":"Range",
                "label":"Track 4. IV. Misterioso",
                "members":[
                  {
                    "id":"http://dlib.indiana.edu/iiif_av/mahler-symphony-3/canvas/2#t=1635,2204",
                    "type":"Canvas"
                  }
                ]
              },
              {
                "id":"http://dlib.indiana.edu/iiif_av/mahler-symphony-3/range/2-5",
                "type":"Range",
                "label":"Track 5. V. Lustig im Tempo",
                "members":[
                  {
                    "id":"http://dlib.indiana.edu/iiif_av/mahler-symphony-3/canvas/2#t=2204,2475",
                    "type":"Canvas"
                  }
                ]
              },
              {
                "id":"http://dlib.indiana.edu/iiif_av/mahler-symphony-3/range/2-6",
                "type":"Range",
                "label":"Track 6. VI. Langsam",
                "members":[
                  {
                    "id":"http://dlib.indiana.edu/iiif_av/mahler-symphony-3/canvas/2#t=2475,3047",
                    "type":"Canvas"
                  }
                ]
              },
              {
                "id":"http://dlib.indiana.edu/iiif_av/mahler-symphony-3/range/2-7",
                "type":"Range",
                "label":"Track 7. Nicht mehr so breit",
                "members":[
                  {
                    "id":"http://dlib.indiana.edu/iiif_av/mahler-symphony-3/canvas/2#t=3047,3287",
                    "type":"Canvas"
                  }
                ]
              },
              {
                "id":"http://dlib.indiana.edu/iiif_av/mahler-symphony-3/range/2-8",
                "type":"Range",
                "label":"Track 8. Tempo I",
                "members":[
                  {
                    "id":"http://dlib.indiana.edu/iiif_av/mahler-symphony-3/canvas/2#t=3287,3451",
                    "type":"Canvas"
                  }
                ]
              },
              {
                "id":"http://dlib.indiana.edu/iiif_av/mahler-symphony-3/range/2-9",
                "type":"Range",
                "label":"Track 9. Tempo I",
                "members":[
                  {
                    "id":"http://dlib.indiana.edu/iiif_av/mahler-symphony-3/canvas/2#t=3451,3829",
                    "type":"Canvas"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }


  beforeEach(() => {
    setFixtures(`<div id='media-player-audio-target'></div>`)
  })

    it('creates HTML5 audio markup with default values when given a IIIF-AV manifest', () => {
    var av  = new Avalon
    var mediaPlayer = av.createAudioPlayer({
      'audio': {},
      'manifest': manifest,
      'target': 'media-player-audio-target'
    })
    var mediaPlayerMarkup = document.getElementById('media-player-audio-target').innerHTML

    console.log('mediaPlayerMarkup', mediaPlayerMarkup)
    expect(mediaPlayerMarkup).toContain('<div class="av-player">')
    expect($('#media-player-audio-target')).toContainElement('div.av-player')
    expect($('.av-player')).toContainElement('div.av-controls')
    
    expect($('#iiif-av-player > audio')).toHaveAttr('src', 'http://dlib.indiana.edu/iiif_av/mahler-symphony-3/CD1/medium/128Kbps.mp4')
    expect($('.mejs__container')).toHaveAttr('style', 'width: 100%; height: 50px;')
    // This is failing in PhantomJS, but not Chrome    
    //expect($('#iiif-av-player > audio > source')).toHaveAttr('data-quality', 'Medium')
  })

    it('creates HTML5 audio markup for a High quality file', () => {
    var av  = new Avalon
    var mediaPlayer = av.createAudioPlayer({
      'audio': { quality: 'High' },
      'manifest': manifest,
      'target': 'media-player-audio-target'
    })
    var mediaPlayerMarkup = document.getElementById('media-player-audio-target').innerHTML
    // This is failing in PhantomJS, but not Chrome
    // expect($('#iiif-av-player > audio > source')).toHaveAttr('data-quality', 'High')
    expect($('#iiif-av-player')).toContainElement('audio')
  })
})