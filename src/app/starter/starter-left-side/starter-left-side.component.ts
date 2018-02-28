import {Router} from '@angular/router';
import {Component, OnInit, Renderer} from '@angular/core';

@Component({
  selector: 'app-starter-left-side',
  templateUrl: './starter-left-side.component.html',
  styleUrls: ['./starter-left-side.component.less']
})
export class StarterLeftSideComponent implements OnInit {

  constructor(private _router : Router) {
    this._router = _router;
  }
  
  ngOnInit() {
   
  }

  reDirect(){
    let url_active = this._router.url.split('/starter/')[1];
    if(url_active){
      // window.location.href = '/starter/'+ url_active
      this._router.navigate(['/starter/' + url_active])
      // Renderer.set(this, 'active', true);
      console.log(url_active)
    }
  }

}
