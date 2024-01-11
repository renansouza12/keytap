import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger);


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    //header
    gsap.from('a',{
    duration:2,
    stagger:1.4,
    opacity:0,
    delay:0.5,
    x:-500
    })

    //hero
    gsap.from('.hero_title',{
      duration:4,
      opacity:0,
    })


    //about
    const text = new SplitType('.paragraph')
    this.createTl('.about_title','.about',{
      from:{
        x:-400,
        opacity:0
      },
      to:{
        x:0,
        opacity:1
      }
    })

    this.createTl('.char','.about',{
      from:{
        opacity:0,
        stagger:0.5,
        transition:0.2
      },
      to:{
        opacity:1,
        
      }
    })
 
    //highlight
    const myText = new SplitType('.highlight-paragraph');
    const myLetters = document.querySelectorAll('.highlight-paragraph .char');

    this.createTl('.highlight-image','.highlight',{
      from:{
        opacity:0,
        y:100
        
      },
      to:{
        opacity:1,
        y:0 
      }
    })

    this.createTl(myLetters,'.highlight',{
      from:{
        opacity:0,
        stagger:0.5,
        transition:0.2
      },
      to:{
        opacity:1,
      }
    })



  }

  createTl(selector:any,trigger:string,property:any){
      return gsap.timeline({
        scrollTrigger:{
          trigger:trigger,
          start:"top center",
          end:"center center",
          scrub:true,
        }
      }).from(selector,property.from ,property.to)
  }

}
