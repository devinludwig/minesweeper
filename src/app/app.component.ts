import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Board } from './board.model';
import { Cell } from './cell.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  showNewGameForm : boolean = false;
  @Output() board: Board;
  @Output() boardWidth: number;

  ngOnInit() {
    this.board = new Board ("1", "");
    this.boardWidth = this.board.populateBoard()*50;
  }

  toggleGameForm() {
    this.showNewGameForm = !this.showNewGameForm;
  }

  newGame(board) {
    this.board = board;
    this.boardWidth = this.board.populateBoard()*50;
    this.toggleGameForm();
  }
}