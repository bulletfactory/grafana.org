Modernizr.addTest("cssvwunit",function(){var e;return Modernizr.testStyles("#modernizr { width: 50vw; }",function(t){var n=parseInt(window.innerWidth/2,10),i=parseInt((window.getComputedStyle?getComputedStyle(t,null):t.currentStyle).width,10);e=i==n}),e});