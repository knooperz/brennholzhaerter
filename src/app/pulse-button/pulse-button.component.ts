import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-pulse-button',
  templateUrl: './pulse-button.component.html',
  styleUrls: ['./pulse-button.component.scss']
})
export class PulseButtonComponent implements OnInit {

  //#region Variabelen

  @ViewChild('pulseButton')
  public pulseButton!: ElementRef<HTMLButtonElement>;

  @Input()
  public buttonText!: string;

  @Input()
  public buttonIcon!: string;

  //#endregion

  //#region Subjecte

  public pulsing: Subject<boolean> = new Subject<boolean>();

  //#endregion

  //#region Konstruktor

  constructor(
    private renderer: Renderer2
  ) {}

  //#endregion

  //#region Methoden

  //#region Angular-Methoden

  ngOnInit(): void {

    this
    .getPulsing()
    .subscribe(
      (state) => {
        if (state === true) {
          this.renderer.setStyle(this.pulseButton.nativeElement, '-webkit-animation', 'pulsing 1.25s infinite cubic-bezier(0.66, 0, 0, 1)');
          this.renderer.setStyle(this.pulseButton.nativeElement, '-moz-animation', 'pulsing 1.25s infinite cubic-bezier(0.66, 0, 0, 1)');
          this.renderer.setStyle(this.pulseButton.nativeElement, '-ms-animation', 'pulsing 1.25s infinite cubic-bezier(0.66, 0, 0, 1)');
          this.renderer.setStyle(this.pulseButton.nativeElement, 'animation', 'pulsing 1.25s infinite cubic-bezier(0.66, 0, 0, 1)');
        } else if(state === false) {
          this.renderer.setStyle(this.pulseButton.nativeElement, '-webkit-animation', 'none');
          this.renderer.setStyle(this.pulseButton.nativeElement, '-moz-animation', 'none');
          this.renderer.setStyle(this.pulseButton.nativeElement, '-ms-animation', 'none');
          this.renderer.setStyle(this.pulseButton.nativeElement, 'animation', 'none');
        }
      }
    );
  }

  //#endregion

  //#region Private-Methoden

  private getPulsing(): Observable<boolean> {
    return this.pulsing.asObservable();
  }

  private setPulse(value: boolean): void {
    this.pulsing.next(value);
  }

  //#endregion

  //#region Public-Methoden

  public ChangePulse(value: boolean): void {
    this.setPulse(value);
  }

  //#endregion

  //#endregion


}
