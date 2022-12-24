import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produkt',
  templateUrl: './produkt.component.html',
  styleUrls: ['./produkt.component.scss']
})
export class ProduktComponent implements OnInit {

  greatImag: string = "";
  images: string[] = []
  textHtml: string = ""

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.getProduct(params['product']);
    })

  }

  changeImage(path: string) {
    this.greatImag = path;
  }

  getProduct(product: string) {
    if (product == "holztransport") {
      this.images = ["../../assets/images/laster.jpg", "../../assets/images/brennholz.jpg", "../../assets/images/teamNew.png"];
      this.greatImag = this.images[0];
      this.textHtml = "<h1>Holztransporte</h1><p>Wir sind spezialisiert auf Holztransporte und fahren Stammholz in Längen von 2 bis 10 Meter. Dazu zählen:</p><ul><li>Abschnitte 2m, 4-6m</li><li>Papierholz 2-3m</li><li> Industrieholz, Brennholz und Energieholz</li></ul><p>Für Sägewerke, Heizwerke und für die Papierindustrie übernehmen wir den Transport vom Wald zum verarbeitendenBetrieb.</p><p>Durch den Einsatz eigener Kranfahrzeuge achten wir auf eine schonende Abfuhr des Rohstoffes Holz aus dem Wald.</p>";
    }
    else if (product == "winterdienst") {
      this.images = ["../../assets/images/laster.jpg", "../../assets/images/brennholz.jpg", "../../assets/images/teamNew.png"];
      this.greatImag = this.images[0];
      this.textHtml = "<h1>WINTERDIENST</h1><p>Wir sind Ihr zuverlässiger Winterdienst in Meßstetten. Wir übernehmen für Sie den regelmäßigen Winterdienst in Meßstetten und Umgebung.</p><p><b>Nichts ergibt ein schöneres Bild als Schneefall im Winter, doch leider bringt dies auch viel Arbeit mit sich. Nächtlicher Schneefall verpflichtet Sie gesetzlich dazu, am frühen Morgen mit Schneeschieber und Streugut Ihren Schneeräumdienst zu erledigen.</b></p><p>Unser Winterdienst nimmt Ihnen diese Pflicht gerne ab, um Ihnen einen angenehmen Start in den Tag zu ermöglichen. Auch wenn Sie bei der Arbeit oder im entspannten Winterurlaub sind, kümmern wir uns um Ihre Räumpflicht egal wie groß Ihr Hof ist.</p>";
    }
    else if (product == "lohnspalten") {
      this.images = ["../../assets/images/laster.jpg", "../../assets/images/brennholz.jpg", "../../assets/images/teamNew.png"];
      this.greatImag = this.images[0];
      this.textHtml = "<h1>Lohnspalten</h1><p>Wir sind Ihr zuverlässiger Winterdienst in Meßstetten. Wir übernehmen für Sie den regelmäßigen Winterdienst in Meßstetten und Umgebung.</p><p><b>Nichts ergibt ein schöneres Bild als Schneefall im Winter, doch leider bringt dies auch viel Arbeit mit sich. Nächtlicher Schneefall verpflichtet Sie gesetzlich dazu, am frühen Morgen mit Schneeschieber und Streugut Ihren Schneeräumdienst zu erledigen.</b></p><p>Unser Winterdienst nimmt Ihnen diese Pflicht gerne ab, um Ihnen einen angenehmen Start in den Tag zu ermöglichen. Auch wenn Sie bei der Arbeit oder im entspannten Winterurlaub sind, kümmern wir uns um Ihre Räumpflicht egal wie groß Ihr Hof ist.</p>";
    }
    else if (product == "sonderfaellungen") {
      this.images = ["../../assets/images/laster.jpg", "../../assets/images/brennholz.jpg", "../../assets/images/teamNew.png"];
      this.greatImag = this.images[0];
      this.textHtml = "<h1>Lohnspalten</h1><p>Wir sind Ihr zuverlässiger Winterdienst in Meßstetten. Wir übernehmen für Sie den regelmäßigen Winterdienst in Meßstetten und Umgebung.</p><p><b>Nichts ergibt ein schöneres Bild als Schneefall im Winter, doch leider bringt dies auch viel Arbeit mit sich. Nächtlicher Schneefall verpflichtet Sie gesetzlich dazu, am frühen Morgen mit Schneeschieber und Streugut Ihren Schneeräumdienst zu erledigen.</b></p><p>Unser Winterdienst nimmt Ihnen diese Pflicht gerne ab, um Ihnen einen angenehmen Start in den Tag zu ermöglichen. Auch wenn Sie bei der Arbeit oder im entspannten Winterurlaub sind, kümmern wir uns um Ihre Räumpflicht egal wie groß Ihr Hof ist.</p>";
    }
  }
}
