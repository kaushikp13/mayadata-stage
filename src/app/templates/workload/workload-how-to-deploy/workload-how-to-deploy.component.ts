import { Component, OnInit, Input, AfterViewInit, AfterViewChecked } from '@angular/core';
import { HighlightService } from "../../../services/highlight/highlight.service";

@Component({
  selector: 'app-workload-how-to-deploy',
  templateUrl: './workload-how-to-deploy.component.html',
  styleUrls: ['./workload-how-to-deploy.component.scss']
})
export class WorkloadHowToDeployComponent implements OnInit {
  INITIAL_INDEX = 0
  selectedIndex: number = this.INITIAL_INDEX;
  @Input('data') workloadJourney;

  highlighted: boolean = false;

  constructor(private highlightService: HighlightService) { }

  ngOnInit() { }

  ngAfterViewInit() {
    const listContainer = document.getElementById("listOfItems");
    let items = listContainer.getElementsByClassName("item");
    const listContentsContainer = document.getElementById("listOfItemContents");
    const listOfMountainClimber = document.getElementById("mountainClimber");
    const itemContents = listContentsContainer.getElementsByClassName(
      "item-content"
    );
    const itemMountainClimbers = listOfMountainClimber.getElementsByClassName(
      "mountain-climber"
    );

    for (let i = 0; i < items.length; i++) {
      items[i].addEventListener("click", function () {
        let current = listContainer.getElementsByClassName("active");
        let current2 = listContentsContainer.getElementsByClassName("show");
        let current3 = listOfMountainClimber.getElementsByClassName("show");
        if (current.length > 0) {
          current[0].className = current[0].className.replace(" active", "");
        }
        if (current2.length > 0) {
          current2[0].className = current2[0].className.replace(" show", "");
        }
        if (current3.length > 0) {
          current3[0].className = current3[0].className.replace(" show", "");
        }
        itemContents[i].className += " show";
        itemMountainClimbers[i].className += " show"
        this.className += " active";
      });
    }
  }

  ngAfterViewChecked() {
    if (!this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }

  onError(e) {
    console.log(e);
  }

  setIndex(index: number) {
    this.selectedIndex = index;
  }
}
