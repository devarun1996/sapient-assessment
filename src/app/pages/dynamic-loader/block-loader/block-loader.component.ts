import { Component, OnInit, HostListener } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-block-loader',
  templateUrl: './block-loader.component.html',
  styleUrls: ['./block-loader.component.scss']
})
export class BlockLoaderComponent implements OnInit {

  constructor( private snackBar: MatSnackBar) { }

  data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  @HostListener('scroll', ['$event'])

  ngOnInit(): void {
  }

  onScroll(event: any) {

    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
      this.loadMoreBlocks();
    }
  }

  loadMoreBlocks() {

    const temp = [1,1,1];
    this.data = [...this.data, ...temp];
  }

  showMessage(index: number) {

    this.snackBar.open('Button in div ' + index + ' clicked!', 'Dismiss');
  }
}
