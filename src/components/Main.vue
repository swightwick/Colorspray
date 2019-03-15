<template>
  <div class="hello">
    
    <header>
      <div id="headerContainer">
      <h1 @click="goHome">{{ siteTitle }}</h1>
      <span class="mobileButton" v-on:click='mobMenuOpen = !mobMenuOpen'>Click me</span>
      <nav class="nav" v-bind:class="{ active: mobMenuOpen }">
        <ul>
          <li v-on:click="panelOpen = 'ironlak'" @click="scrollToTop" v-bind:class="{ 'active': panelOpen == 'ironlak'}">Ironlak</li>
          <li v-on:click="panelOpen = 'montanaHardcore'" @click="scrollToTop" v-bind:class="{ 'active': panelOpen == 'montanaHardcore'}">Montana Hardcore</li>
          <li v-on:click="panelOpen = 'montanaGold'" @click="scrollToTop" v-bind:class="{ 'active': panelOpen == 'montanaGold'}">Montana Gold</li>
          <li v-on:click="panelOpen = 'loop'" @click="scrollToTop" v-bind:class="{ 'active': panelOpen == 'loop'}">Loop</li>
          <li v-on:click="panelOpen = 'onetake'" @click="scrollToTop" v-bind:class="{ 'active': panelOpen == 'onetake'}">One Take</li>
          <li v-on:click="panelOpen = 'molotow'" @click="scrollToTop" v-bind:class="{ 'active': panelOpen == 'molowtow'}">Molotow belton</li>
          <li v-on:click="panelOpen = 'about'" @click="scrollToTop" v-bind:class="{ 'active': panelOpen == 'about'}">About</li>
        </ul>
      </nav>
      </div>
    </header>

    <div id="paletteTab" v-on:click='paletteOpen = !paletteOpen'>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 256 256" style="enable-background:new 0 0 256 256;" xml:space="preserve">
      <g>
        <path class="st0" d="M200.5,90.9c20.2,12.1,34.5,34.7,37.4,57.8c5.7,44.9-21,81.2-62.4,96.1C107.6,269.3,25.8,229.3,11.2,157
          c-8.9-44.1,5.6-85.2,44.2-109.6c13.6-8.6,30-14.7,46.2-15.9c13.6-1,29.5,1.4,38.7,12.4c2.5,3,4.2,6.4,4.9,10.2
          c2.3,11-3.5,20.8-3.9,26.5l-2.3,2.7l-6.4,8c-10.2-12.6,7.6-28.7-1.5-39.6C109.8,26.3,3.6,58.6,23,154.7
          c12.8,63.6,85.9,101.4,148.5,78.9c35.6-12.8,59.6-43.5,54.6-83.3c-2.5-19.9-15.3-39.9-33.2-49.9L200.5,90.9L200.5,90.9z M96.3,83.6
          c-5.5,1.2-12.2,6.1-10.9,12.5c0.3,1.6,1,2.9,2.2,4c5.6,5.4,16.4,3.6,21.2-2.2c1.9-2.3,3-5.1,2-8.1C108.8,83.9,101.7,82.4,96.3,83.6
          L96.3,83.6z M94.3,73.8c20.6-4.3,34.5,15.5,22.2,30.5c-11.9,14.5-37.5,11-40.9-6.2C73.2,86.3,82.8,76.2,94.3,73.8L94.3,73.8z
          M174.4,111.5c-11.3,13.1-27.4,21.3-39.6,34.7c-1.5,1.7-4.1,1.8-5.8,0.2l0,0l-12.9-12c-1.6-1.5-1.7-4.1-0.2-5.7l0,0
          c12.3-13.6,18.9-30.4,30.8-42.9c28.1-29.3,58.2-53.4,87.6-80.5c5.6-5.1,16.3,4.8,11.8,10.8l0,0c-20.5,27.1-39.5,54.9-60.5,81.6
          C182,102.5,178.3,107,174.4,111.5L174.4,111.5z M142.3,107.8l10.7,9.8c14.3-11.3,26.9-27.8,38-42.6l47.8-62.3l-0.1-0.1
          C217,33.3,195.6,50.9,176,69.5C163.7,81.3,151.7,93.1,142.3,107.8L142.3,107.8z M149.4,121.5l-10.2-9.3L125.8,131l6.1,5.7
          L149.4,121.5L149.4,121.5z"/>
        <path class="st0" d="M188,173.2c-0.4-0.9-0.5-1.9-0.1-2.9l0-0.2c0-0.3,0-0.6,0-0.8c0-0.5,0.1-1,0.3-1.4c0.7-6.5,2.1-14,9-16.1
          C238.6,139.4,190.7,230.5,188,173.2L188,173.2z M82.8,176c21.6,2.8,42.8-3.3,45.3-26.8c-3.4-3.2-12.1-11.1-15.5-14.2
          C84.3,140.9,96,166.7,82.8,176L82.8,176z M53.3,160.8c8.6-0.7,8.3,4.6,12.5,8.5c0.5,0.1,0.8,0.1,1.3,0.4
          c18.1,9.3-16.2,34.3-22.6,17.4c-5.7-15.1-4.6-18.2,5.5-25.9C50.9,160.6,52.2,160.5,53.3,160.8L53.3,160.8z M81.5,204.3
          c-2.1-7.9,1.2-13.7,8.9-8.8l0-0.1c4.7,1,11.2,0.8,16.2,1.4c26.4,3.3,2.5,47.6-26.3,13.4c-1.3-1.6-1.2-4,0.4-5.4
          C80.9,204.6,81.2,204.4,81.5,204.3L81.5,204.3z M134.6,210.7c-0.1-1.8,1-3.4,2.6-4.1c1.7-11.6,14.3-17.8,24.9-19.4
          c31.8-4.6,11.8,13.8,7.9,18.5c-2,23-30.6,22.3-35.7,7.8C134.1,212.5,134.2,211.5,134.6,210.7L134.6,210.7z"/>
      </g>
      </svg>
    </div>


    <transition
      enter-active-class="animated slideInUp"
      leave-active-class="animated slideOutDown">
      <div id="palette" v-show="paletteOpen == true">
        <div class="row title">
          <div class="col-lg-6 col-xs-12 infoOne">
            <strong>Your Palette</strong><span>Click to delete, drag to rearrange</span>
          </div>
          <div class="col-lg-6 col-xs-12 infoTwo">
            <span @click="clearPalette()">Clear All</span>
            <span v-on:click='paletteList = !paletteList'>Show list</span>
            <span v-on:click='paletteOpen = !paletteOpen'>Close Palette</span>
          </div>
        </div>
        <div class="row">
          <div class="holder">
            <draggable v-model="paletteColors" group="people" @start="drag=true" @end="drag=false">

            <div v-for="(paletteColor, index) in paletteColors" class="paletteColor" v-on:click.prevent="deleteFromPalette(index)">
              <div :style="{ backgroundColor: paletteColor.color }" class="swatch">
                <div class="swatchDetails">{{paletteColor.name}}</div>
              </div>
            </div>
            </draggable>
          </div>
        </div>

    <transition
      enter-active-class="animated slideInUp"
      leave-active-class="animated slideOutDown"
    >
        <div class="row" v-show="paletteList == true">
          <div class="list">
            <h3>My Palette</h3>
              <table>
                <tr>
                  <th>Name</th>
                  <th>Color value</th>
                </tr>
                <tr v-for="(paletteColor, index) in paletteColors">
                  <td>{{paletteColor.name}}</td>
                  <td>{{paletteColor.color}}</td>
                </tr>
              </table>
          </div>
        </div>
        </transition>

      </div>
    </transition>

    <video-bg :sources="['../paint.mp4']" img="demo/assets/bg.jpg"  id="homeVideo" v-show="panelOpen == 'home'">
      <!-- If you want to add content here, a slot is waiting! -->
      <h1>All colors from the best spray paint brands in on place!</h1>
    </video-bg>

    <div id="container">

        <div id="mainHolder" class="holders" v-show="panelOpen == 'home'" v-bind:class="{ 'active': panelOpen == 'home'}">
          <div class="row">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          </div>
        </div>

        <div id="ironlakHolder" class="holders" v-show="panelOpen == 'ironlak'" v-bind:class="{ 'active': panelOpen == 'ironlak'}">
          <img :src="require('../images/ironlak.png')" class="brandLogo">
          <div class="row">
            <div v-for="(ironlak, index) in ironlak" 
            class="color ironlak col-xs-6 col-lg-3"
            :key="index" @click="addToPalette(ironlak)">
              <div :style="{ backgroundColor: ironlak.color }" class="swatch">
                <div class="swatchDetails">{{ironlak.name}}</div>
              </div>
            </div>
          </div>
        </div>

        <div id="montanagoldHolder" class="holders" v-show="panelOpen == 'montanaGold'" v-bind:class="{ 'active': panelOpen == 'montanaGold'}">
          <img :src="require('../images/montana.png')" class="brandLogo">
          <div class="row">
            <div v-for="(montanaGold, index) in montanaGold" @click="addToPalette(montanaGold)"
            class="color montanaGold col-xs-6 col-lg-3"
            :key="index">
              <div :style="{ backgroundColor: montanaGold.color }" class="swatch">
                <div class="swatchDetails">{{montanaGold.name}}</div>
              </div>
            </div>
          </div>
        </div>

        <div id="loopHolder" class="holders" v-show="panelOpen == 'loop'" v-bind:class="{ 'active': panelOpen == 'loop'}">
          <img :src="require('../images/loop.png')" class="brandLogo">
          <div class="row">
            <div v-for="(loop, index) in loop" @click="addToPalette(loop)"
            class="color loop col-xs-6 col-lg-3"
            :key="index">
              <div :style="{ backgroundColor: loop.color }" class="swatch">
                <div class="swatchDetails">{{loop.name}}</div>
              </div>
            </div>
          </div>
        </div>

        <div id="about" class="holders" v-show="panelOpen == 'about'" v-bind:class="{ 'active': panelOpen == 'about'}">
          <div class="row">
            <p><strong>TRADEMARK INFORMATION:</strong> All trademarks, trade names, or logos mentioned or used are the property of their respective owners. Every effort has been made to properly capitallize, punctuate, identify and attribute trademarks and tradenames to their respective owners, including the use of ® and ™ (TM) wherever possible and practical.<br>
            All other trademarks are the property of their respective owners.</p>
            <p><strong>DISCLAIMER OF LIABILITY:</strong> Neither {{ siteUrl }} nor any agent/agency therof, makes any warranty, express or implied, or assumes any legal liability or responsibility for the accuracy, completeness, or usefulness of any information, apparatus, product, or process disclosed, or represents that its use would not infringe privately owned rights. Neither {{ siteUrl }} nor any agent/agency therof, makes any warranty, express or implied, or assumes any legal liability or responsibility for any consequences of your use (or misuse) of any such information, apparatus, product, or process, including any consequences arising from using information supplied by this site.</p>
            <p><strong>LINKS TO OTHER SITES:</strong> Links from this site {{ siteUrl }} to other websites or internet locations are offered as a convenience only, and (as for this site) your use of them is at your own risk. Neither {{ siteUrl }} nor any agent/agency therof, makes any warranty, express or implied, or assumes any legal liability or responsibility for the accuracy, completeness, or usefulness of any information, product, or service offered at or by those linked sites. Nor do we assume any legal liability or responsibility for any consequences arising from your access or use of those links.</p>
            <p><strong>SOURCES:</strong></p><br>
            <ul>
              <li><strong>Ironlak:</strong> https://ironlak.com.au/ironlak/</li>
              <li><strong>Montana Gold:</strong> https://www.montana-cans.com/en/spray-cans/montana-spray-paint/gold-400ml-artist-paint/montana-gold-400ml-colors</li>
              <li><strong>Montana Hardcore:</strong> https://www.montanacolors.com/en/productos/hardcore/</li>
              <li><strong>Belton Molotow:</strong> </li>
              <li><strong>Loop colors:</strong> https://www.alfresh.co/cans/loop-400ml-plus-one-extra-cap-free-every-can/</li>
              <li><strong>One Take:</strong> </li>
            </ul>
          </div>
        </div>
        
    </div>

    <div class="row logos" v-show="panelOpen == 'home'">
      <img :src="require('../images/ironlak.png')" v-on:click="panelOpen = 'ironlak'" @click="scrollToTop"/>
      <img :src="require('../images/montana.png')" v-on:click="panelOpen = 'montanaHardcore'" @click="scrollToTop"/>
      <img :src="require('../images/mtn.png')" v-on:click="panelOpen = 'montanaGold'" @click="scrollToTop"/>
      <img :src="require('../images/loop.png')" v-on:click="panelOpen = 'loop'" @click="scrollToTop"/>
    </div>

    <footer>
      <span>Copyright {{ siteUrl }}</span>
    </footer>
  </div>
</template>

<script>

//jsons
import ironlak from '../jsons/ironlak.json'
import montanaGold from '../jsons/montanaGold.json'
import loop from '../jsons/loop.json'

//logos
import ironlakLogo from '../images/ironlak.png'
import montanaLogo from '../images/montana.png'
import mtnLogo from '../images/mtn.png'
import loopLogo from '../images/loop.png'
import draggable from 'vuedraggable'


export default {
  components: {
      draggable
  },
  name: 'Main',
  data() {
    return {
      index: '',
      siteTitle: "ColorSpray",
      siteUrl: "colorspray.com",
      mobMenuOpen: '',
      panelOpen: 'home',
      paletteOpen: false,
      paletteList: false,
      loop: loop,
      ironlak: ironlak,
      montanaGold: montanaGold,
      paletteColors: [{
        name: 'Demo',
        color: 'Color'
      }],
    }
  },
  methods:{
    goHome(){
      this.panelOpen = "home";
    },
    scrollToTop() {
        window.scrollTo(0,0);
    },
    addToPalette(name, color){
      this.paletteColors.push( JSON.parse( JSON.stringify( name ) ) );
    },
    deleteFromPalette: function(index) {
      this.$delete(this.paletteColors, index);
    },
    clearPalette(){
      this.paletteColors = [];
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
// vars
$maxwidth: 75%;
$shadow:  rgba(36, 37, 38, 0.13);

//structure 
#app{
  position: relative;
}

a, li, h1{
  cursor: pointer;
}

header{
  position: fixed;
  z-index: 10;
  left: 0;
  right: 0;
  top: 0;
  border-bottom: 1px solid #ebebeb;
  background-color: #ffffffe6;
  display: flex;
}

nav{
  display: block;
  ul{
    display: flex;
    justify-content: center;
    li{
      border-width: 0 1px 0 1px;
      padding: 1rem;
      list-style: none;
      &.active{
        border-bottom: 3px solid;
      }
    }
  }
}

#headerContainer{
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  max-width: $maxwidth;
  width: 100%;
  justify-content: space-between;
}

#container{
  max-width: $maxwidth;
  margin: 0 auto;
  display: block;
}

// Color palette
#palette{
  z-index: 99;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: white;
  padding-top: 1rem;
  padding-bottom: 1rem;
  box-shadow: 0px 0 20px $shadow;
  span{
    &:hover{
      cursor: pointer;
    }
  }
  .row{
    max-width: $maxwidth;
    margin: 0 auto;
    &.title{
    border-bottom: 1px solid #dddddd;
    padding-bottom: 10px;
    margin-bottom: 15px;
    }
    .infoOne{
      display: flex;
      justify-content: flex-start;
      span{
        display: inline-block;
        font-size: 10px;
        margin-left: 20px;
      }
    }
    .infoTwo{
      display: flex;
      justify-content: flex-end;
      span{
        margin-left: 20px;
      }
    }
    .holder{
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
      align-content: stretch;
      display: flex;
      margin: 0 auto;
      .paletteColor{
        margin: 10px;
        width: 120px;
        display: inline-block;
        .swatch{
          padding-top: 40px;
          font-size: 8px;
          &:hover{
            cursor: grab;
          }
          &:hover :after{
            position:absolute;
            top:0;
            left:0;
            content:'';
            width: 100%;
            height: 100%;
            border-radius: 12px;
            background: url("../images/cross.svg");
            background-repeat: no-repeat;
            background-position: top 10px right 10px;
            background-size: 10%;
            background-color: rgba(255,255,255,0.25);
          }
        }
      }
    }
    .list{
      text-align: center;
      width: 100%;
      table{
        max-width: $maxwidth;
        width: 100%;
        margin: 0 auto;
        td{
          width: 50%;
        }
      }
    }
  }
}

#paletteTab{
  z-index: 999;
  position: fixed;
  bottom: 0;
  right: 50px;
  height: 64px;
  width: 64px;
  background: white;
  padding: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 0px 0 20px $shadow;
  .st0{fill-rule:evenodd;clip-rule:evenodd;fill:#555555;}
  &:hover{
    cursor: pointer;
  }
}

//home

#homeVideo{
  max-height: 50rem;
  h1{
    padding: 0 2rem;
  }
}

.logos{
  display: flex;
  justify-content: space-around;
  padding: 3rem 0;
  background: #fff;
  margin-top: 4rem;
  max-width: 100%;
  width: 100%;
  margin: 0;
  align-items: center;
  margin-top: 5rem;
  img{
    height: 100%;
    width: 160px;
  }
  &:hover{
    cursor: pointer;
  }
}


//swatch pages

#mainHolder{
  padding-top: 5rem;
}

#ironlakHolder, #montanagoldHolder, #loopHolder{
  padding-top: 10rem;
  margin-bottom: 6rem;
}

.holders{
  .brandLogo{
    max-width: 250px;
    padding: 3rem 0;
  }
}

.holders.active{
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.color{
  min-height: 160px;
  align-items: center;
  padding: 1rem 2rem;
  transition: all .25s;
  &:hover{
    transform: translateY(5px);
    cursor: pointer;
    .swatch{
      box-shadow: 5px 12px 20px $shadow;
      &:after{
        position:absolute;
        top:0;
        left:0;
        content:'';
        width: 100%;
        height: 100%;
        border-radius: 12px;
        background: url("../images/plus.svg");
        background-repeat: no-repeat;
        background-position: center center;
        background-color: rgba(255,255,255,0.25);
      }
    }
  }
}

.swatch{
  display: flex;
  justify-content: start;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(36,37,38,0.08);
  position: relative;
}

.swatchDetails{
  padding: 10px 15px;
  display: block;
  background: #fff;
  border-top-right-radius: 12px;
  border-bottom-left-radius: 12px;
  text-transform: capitalize;
}

#mainHolder{
  text-align: center;
}

footer{
  padding: 5rem;
  background: #e4e4e4;
  border-top: 1px solid #e0e0e0;
}

///about 

#about{
  padding-top: 10rem;
  padding-bottom: 4rem;
  ul{
    text-align: center;
    list-style: none;
    width: 100%;
  }
  p{
    width: 100%;
  }
}


@-webkit-keyframes fadeInDown {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -1%, 0);
    transform: translate3d(0, -1%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -1%, 0);
    transform: translate3d(0, -1%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@media only screen and (max-width: 480px)  {
  p{
    padding: 0 2rem;
  }
  #container{
    max-width: 98%;
    margin: 0 1%;
    display: block;
  }
  #mainHolder{
    padding-top: 5rem;
  }
  .logos{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  #ironlakHolder, #montanagoldHolder, #loopHolder{
    padding-top: 0;
    margin-bottom: 1rem;
  }
  .color{
    padding:.5rem 1rem;
  }
  #headerContainer{
    max-width: 100%;
    flex-direction: column;
  }
  #palette{
    padding-top: 10rem;
    height: 90%;
  }
  #paletteTab{
    right: 0;
  }
  nav{
    display: none;
    &.active{
      display: block;
      -webkit-animation-name: fadeInDown;
      animation-name: fadeInDown;
      -webkit-animation-duration: 1s;
      animation-duration: 1s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
    }
    ul{
      flex-direction: column;
      li{
        border-width: 0 1px 0 1px;
        padding: 1rem;
        list-style: none;
        flex: 1;
        &.active{
          border-bottom: 3px solid;
        }
      }
    }
  }

}

</style>
<!--
ironlak ✓
montana gold ✓
montana hardcore
loop colors ✓
one take
Molotow belton
Kobra
-->