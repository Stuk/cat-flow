montageDefine("be458eb","ui/main.reel/main.html",{text:'<!DOCTYPE html><html><head>\n    <meta charset=utf-8>\n    <title>\n        Main\n    </title>\n    <link rel=stylesheet href=main.css>\n    <script type=text/montage-serialization>{"owner":{"properties":{"element":{"#":"main"},"selectedSub":"catsstandingup"}},"flow":{"prototype":"montage/ui/flow.reel","properties":{"element":{"#":"flow"},"cameraFov":50,"cameraPosition":[-150,60,1500],"cameraTargetPoint":[-150,60,0],"content":[],"contentController":{"@":"rangeController"},"flowEditorMetadata":{"flowEditorVersion":0.1,"shapes":[{"type":"FlowSpline","name":"Spline 1","pathIndex":0}],"selected":0},"hasElasticScrolling":true,"hasSelectedIndexScrolling":false,"isSelectionEnabled":false,"linearScrollingVector":[-300,0],"momentumDuration":1000,"paths":[{"knots":[{"previousHandlerPosition":[],"nextDensity":5.6000000000000005,"previousDensity":5.6000000000000005,"knotPosition":[-1230,80,-151],"rotateX":0,"rotateY":0,"rotateZ":0,"opacity":1,"nextHandlerPosition":[-370,-560,-151]},{"knotPosition":[1240,190,-2311],"nextHandlerPosition":[2649.9999999999995,-190,-5001],"previousHandlerPosition":[-169.99999999999955,570,379],"nextDensity":10,"previousDensity":10,"rotateX":0,"rotateY":0,"rotateZ":0,"opacity":1}],"units":{"rotateX":"","rotateY":"","rotateZ":"","opacity":""},"headOffset":0,"tailOffset":0}],"scrollingTransitionDuration":500,"scrollingTransitionTimingFunction":"ease","scrollVectorX":true,"scrollVectorY":true,"selectedIndexScrollingOffset":0,"stride":""}},"image":{"prototype":"digit/ui/image.reel","properties":{"element":{"#":"image"},"crossOrigin":null},"bindings":{"src":{"<-":"@flow:iteration.object"}}},"rangeController":{"prototype":"montage/core/range-controller","bindings":{"content":{"<-":"@owner.catImages"}}}}</script>\n</head>\n<body>\n    <div data-montage-id=main data-montage-skin=light class=Main>\n        <div id=rainbow></div>\n        <img id=nyan src=nyan.gif>\n        <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0" data-montage-id=flow>\n            <div class=nyanblock>\n                <img data-montage-id=image src="" class=Main-catImage>\n            </div>\n        </div>\n    </div>\n\n</body></html>'});