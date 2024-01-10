import { Component, HostListener, OnInit } from '@angular/core';
import { gsap } from "gsap";

@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.scss']
})
export class CursorComponent implements OnInit{

  ngOnInit(): void {
    gsap.set('.cursor_dot',{xPercent:-50,yPercent:-50});
    gsap.set('.cursor_outline',{xPercent:-50,yPercent:-50});
  }
  @HostListener('document:mousemove',['$event'])
  onMouseMove(event:MouseEvent){
    gsap.to('.cursor_outline',0.5,{x:event.clientX, y:event.clientY});
    gsap.to('.cursor_dot',0.2,{x:event.clientX, y:event.clientY});
  }
}
