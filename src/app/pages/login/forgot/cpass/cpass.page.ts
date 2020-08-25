import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-cpass',
  templateUrl: './cpass.page.html',
  styleUrls: ['./cpass.page.scss'],
})
export class CpassPage implements OnInit {

  constructor() { }

  ngOnInit() {
    $(".toggle-password").click(function() {

      $(this).toggleClass("fa-eye fa-eye-slash");
      var input = $($(this).attr("toggle"));
      if (input.attr("type") == "password") {
        input.attr("type", "text");
      } else {
        input.attr("type", "password");
      }
      });
  }

}
