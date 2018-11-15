import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  public companyImages1 = [
    "/res/img/companyMarks/cm1.webp",
    "/res/img/companyMarks/cm2.webp",
    "/res/img/companyMarks/cm3.webp",
    "/res/img/companyMarks/cm4.webp",
  ];
  public companyImagesGroup = [[
    "/res/img/companyMarks/cm5.webp",
    "/res/img/companyMarks/cm6.webp",
    "/res/img/companyMarks/cm7.webp",
    "/res/img/companyMarks/cm1.webp",
  ],
  [
    "/res/img/companyMarks/cm2.webp",
    "/res/img/companyMarks/cm3.webp",
    "/res/img/companyMarks/cm4.webp",
    "/res/img/companyMarks/cm5.webp",
  ],
  [
    "/res/img/companyMarks/cm6.webp",
    "/res/img/companyMarks/cm7.webp",
    "/res/img/companyMarks/cm1.webp",
    "/res/img/companyMarks/cm2.webp",
  ],
  [
    "/res/img/companyMarks/cm3.webp",
    "/res/img/companyMarks/cm4.webp",
    "/res/img/companyMarks/cm5.webp",
    "/res/img/companyMarks/cm6.webp",
  ],
  [
    "/res/img/companyMarks/cm7.webp",
    "/res/img/companyMarks/cm1.webp",
    "/res/img/companyMarks/cm2.webp",
    "/res/img/companyMarks/cm3.webp",
  ],
  [
    "/res/img/companyMarks/cm4.webp",
    "/res/img/companyMarks/cm5.webp",
    "/res/img/companyMarks/cm6.webp",
    "/res/img/companyMarks/cm7.webp",
  ]];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelect(target) {
    this.router.navigate(['layout', target]);
  }

}
