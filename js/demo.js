window.onload = function(){
      var banner = document.getElementById('banner');
      var pictrue = document.getElementById('pictrue');
      var bbon = document.getElementById('bbon').getElementsByTagName('li')
            var par = document.getElementById('par');
            var pare = document.getElementById('pare');
            var index = 1;
            var len = 6;
            var animated = false;
            var interval = 3000;
            var timer;

            function animate (afffe) {
                if (afffe == 0) {
                    return;
                }
                animated = true;
                var time = 200;
                var inteval = 10;
                var speed = afffe/(time/inteval);
                var left = parseInt(pictrue.style.left) + afffe;

                var go = function (){
                    if ( (speed > 0 && parseInt(pictrue.style.left) < left) || (speed < 0 && parseInt(pictrue.style.left) > left)) {
                        pictrue.style.left = parseInt(pictrue.style.left) + speed + 'px';
                        setTimeout(go, inteval);
                    }
                    else {
                        pictrue.style.left = left + 'px';
                        if(left>-800){
                            pictrue.style.left = -800 * len + 'px';
                        }
                        if(left<(-800 * len)) {
                            pictrue.style.left = '-800px';
                        }
                        animated = false;
                    }
                }
                go();
            }


            function showbbon(){
              for(var i = 0; i < bbon.length; i++){
                if(bbon[i].className == 'oon'){
                  bbon[i].className = '';
                  break;
                }
              }
              bbon[index - 1].className = 'oon';
            }

            function play() {
                timer = setTimeout(function () {
                    pare.onclick();
                    play();
                }, interval);
            }
            function stop() {
                clearTimeout(timer);
            }

            pare.onclick = function(){
              if (animated) {
                    return;
                }
              if( index == 6){
                index == 1;
              }
              else{
                  index += 1;
              }
              showbbon();
                animate(-800);           
            }
            par.onclick = function(){
              if (animated) {
                    return;
                }
              if( index == 1){
                index == 6;
              }
              else{
                  index -= 1;
              }
              showbbon();
              animate(800); 
            }
             
            for(var i = 0; i < bbon.length; i++){
              bbon[i].onclick = function(){
                if (animated) {
                        return;
                    }
                if(this.className == 'oon'){
                  return;
                }
                var myindex = parseInt(this.getAttribute('index'));
                var afffe = -800 * (myindex - index);
                animate(afffe);
                index = myindex;
                showbbon();
              }
            }
            banner.onmouseover = stop;
            banner.onmouseout = play;

            play();

    }