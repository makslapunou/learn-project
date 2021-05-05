import { Component, OnInit } from "@angular/core";
import { ExtraService } from "../extra.service";

@Component({
  selector: "app-extra",
  templateUrl: "./extra.component.html",
  styleUrls: ["./extra.component.sass"],
})
export class ExtraComponent implements OnInit {
  constructor(private extraService: ExtraService) {}

  ngOnInit() {}
}
