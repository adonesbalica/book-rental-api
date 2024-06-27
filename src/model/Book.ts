class Book {
  name: string;
  description: string;
  isRent: boolean;
  duration: string;

  constructor() {
    if (!this.isRent) {
      this.isRent = false;
    }

    // if (!this.duration) {
    //   this.duration = "0";
    // }
  }
}

export { Book };

