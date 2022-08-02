import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class SnackBarMessagesService {

  constructor(private _snackBar: MatSnackBar) { }

  /**
   * Method that invokes the snackbar to display system messages to the user
   * id meaning -> 0: error, 1: success, 2: warning
   * @param id
   * @param message
   * Jose Luis Gallardo Vaca - 02/08/2022
   */
  public invokeSnackbar(id: number, message: string) {
      if (id == 1) {
          this._snackBar.open(message, 'X', {
              duration: 3000,
              horizontalPosition: 'center',
              verticalPosition: 'top',
              panelClass: ['snackbarSuccess']
          });
      } else if (id == 0) {
          this._snackBar.open(message, 'X', {
              duration: 3000,
              horizontalPosition: 'center',
              verticalPosition: 'top',
              panelClass: ['snackbarError']
          });
      } else if (id == 2) {
          this._snackBar.open(message, 'X', {
              duration: 3000,
              horizontalPosition: 'center',
              verticalPosition: 'top',
              panelClass: ['snackbarWarning']
          });
      }
  }

}
