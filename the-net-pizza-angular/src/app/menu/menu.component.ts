import { Component } from '@angular/core';
import { Piatto } from '../@models/piatto';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
   menu = [
    {
      "id": 1,
      "category": "antipasti",
      "title": "Tagliere di salumi",
      "description": "Un assortimento di salumi regionali ed extraregionali.",
      "imageUrl": "https://michelefenu.github.io/tnv-academy-IX/the-net-pizza-bootstrap/assets/images/tagliere-salumi.jpg",
      "price": 12,
      "ingredients": [
        "Prosciutto",
        "Salame",
        "Speck",
        "Soppressata",
        "Salame Piccante"
      ],
      "available": true,
      "allergens": [
        "Glutine"
      ],
      "nutritionalValues": {
        "kcal": "145",
        "totalFat": "6g",
        "saturatedFat": "6g",
        "cholesterol": "53mg",
        "carbohydrate": "1,5g",
        "sodium": "1203 mg",
        "protein": "21g"
      }
    },
    {
      "id": 2,
      "category": "antipasti",
      "title": "Antipasto di Mare",
      "description": "Una selezione di antipasti tradizionali a base di pesce.",
      "imageUrl": "https://michelefenu.github.io/tnv-academy-IX/the-net-pizza-bootstrap/assets/images/antipasto-mare.jpg",
      "price": 15,
      "available": true,
      "ingredients": [
        "Polpo",
        "Cozze",
        "Vongole",
        "Gamberi",
        "Ostriche"
      ],
      "allergens": [
        "Glutine"
      ],
      "nutritionalValues": {
        "kcal": "145",
        "totalFat": "6g",
        "saturatedFat": "6g",
        "cholesterol": "53mg",
        "carbohydrate": "1,5g",
        "sodium": "1203 mg",
        "protein": "21g"
      }
    },
    {
      "id": 3,
      "category": "antipasti",
      "title": "Zuppa di Mare",
      "description": "Zuppa di cozze e arselle su crostini piccanti.",
      "imageUrl": "https://michelefenu.github.io/tnv-academy-IX/the-net-pizza-bootstrap/assets/images/zuppa-mare.jpg",
      "price": 10,
      "available": false,
      "ingredients": [
        "Cozze",
        "Vongole",
        "Crostini",
        "Brodo di Pesce"
      ],
      "allergens": [
        "Glutine"
      ],
      "nutritionalValues": {
        "kcal": "145",
        "totalFat": "6g",
        "saturatedFat": "6g",
        "cholesterol": "53mg",
        "carbohydrate": "1,5g",
        "sodium": "1203 mg",
        "protein": "21g"
      }
    },
    {
      "id": 4,
      "category": "primi",
      "title": "Carbonara",
      "description": "Un classico intramontabile della cucina romana.",
      "imageUrl": "https://michelefenu.github.io/tnv-academy-IX/the-net-pizza-bootstrap/assets/images/carbonara.jpg",
      "price": 9,
      "available": true,
      "ingredients": [
        "Pasta",
        "Uova",
        "Pecorino Romano",
        "Guanciale"
      ],
      "allergens": [
        "Glutine"
      ],
      "nutritionalValues": {
        "kcal": "145",
        "totalFat": "6g",
        "saturatedFat": "6g",
        "cholesterol": "53mg",
        "carbohydrate": "1,5g",
        "sodium": "1203 mg",
        "protein": "21g"
      }
    },
    {
      "id": 5,
      "category": "primi",
      "title": "Cacio e Pepe",
      "description": "Pepe nero, formaggio pecorino romano e pasta.",
      "imageUrl": "https://michelefenu.github.io/tnv-academy-IX/the-net-pizza-bootstrap/assets/images/cacio-pepe.jpg",
      "price": 8,
      "available": true,
      "ingredients": [
        "Pasta",
        "Pecorino Romano",
        "Pepe"
      ],
      "allergens": [
        "Glutine"
      ],
      "nutritionalValues": {
        "kcal": "145",
        "totalFat": "6g",
        "saturatedFat": "6g",
        "cholesterol": "53mg",
        "carbohydrate": "1,5g",
        "sodium": "1203 mg",
        "protein": "21g"
      }
    },
    {
      "id": 6,
      "category": "primi",
      "title": "Amatriciana",
      "description": "Piatto tipico di Amatrice, cittadina in provincia di Rieti.",
      "imageUrl": "https://michelefenu.github.io/tnv-academy-IX/the-net-pizza-bootstrap/assets/images/amatriciana.jpg",
      "price": 8,
      "available": true,
      "ingredients": [
        "Pasta",
        "Pancetta",
        "Sugo di Pomodoro"
      ],
      "allergens": [
        "Glutine"
      ],
      "nutritionalValues": {
        "kcal": "145",
        "totalFat": "6g",
        "saturatedFat": "6g",
        "cholesterol": "53mg",
        "carbohydrate": "1,5g",
        "sodium": "1203 mg",
        "protein": "21g"
      }
    },
    {
      "id": 7,
      "category": "primi",
      "title": "Fregola con Arselle",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "imageUrl": "https://michelefenu.github.io/tnv-academy-IX/the-net-pizza-bootstrap/assets/images/fregola-arselle.jpg",
      "price": 7,
      "available": false,
      "ingredients": [
        "Fegola",
        "Vongole",
        "Prezzemolo",
        "Brodo di Pesce"
      ],
      "allergens": [
        "Glutine"
      ],
      "nutritionalValues": {
        "kcal": "145",
        "totalFat": "6g",
        "saturatedFat": "6g",
        "cholesterol": "53mg",
        "carbohydrate": "1,5g",
        "sodium": "1203 mg",
        "protein": "21g"
      }
    },
    {
      "id": 8,
      "category": "primi",
      "title": "Risotto ai Funghi",
      "description": "Un piatto invernale, solo con porcini regionali raccolti a mano.",
      "imageUrl": "https://michelefenu.github.io/tnv-academy-IX/the-net-pizza-bootstrap/assets/images/risotto-funghi.jpg",
      "price": 10,
      "available": false,
      "ingredients": [
        "Riso Carnaroli",
        "Funghi Porcini",
        "Brodo Vegetale",
        "Burro"
      ],
      "allergens": [
        "Glutine"
      ],
      "nutritionalValues": {
        "kcal": "145",
        "totalFat": "6g",
        "saturatedFat": "6g",
        "cholesterol": "53mg",
        "carbohydrate": "1,5g",
        "sodium": "1203 mg",
        "protein": "21g"
      }
    },
    {
      "id": 9,
      "category": "dolci",
      "title": "Seadas",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "imageUrl": "https://michelefenu.github.io/tnv-academy-IX/the-net-pizza-bootstrap/assets/images/seadas.jpg",
      "price": 6,
      "available": true,
      "ingredients": [
        "Farina",
        "Formaggio",
        "Miele"
      ],
      "allergens": [
        "Glutine"
      ],
      "nutritionalValues": {
        "kcal": "145",
        "totalFat": "6g",
        "saturatedFat": "6g",
        "cholesterol": "53mg",
        "carbohydrate": "1,5g",
        "sodium": "1203 mg",
        "protein": "21g"
      }
    },
    {
      "id": 10,
      "category": "dolci",
      "title": "Cheesecake",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "imageUrl": "https://michelefenu.github.io/tnv-academy-IX/the-net-pizza-bootstrap/assets/images/cheesecake.jpg",
      "price": 5,
      "available": true,
      "ingredients": [
        "Farina",
        "Formaggio",
        "Marmellata di More"
      ],
      "allergens": [
        "Glutine"
      ],
      "nutritionalValues": {
        "kcal": "145",
        "totalFat": "6g",
        "saturatedFat": "6g",
        "cholesterol": "53mg",
        "carbohydrate": "1,5g",
        "sodium": "1203 mg",
        "protein": "21g"
      }
    },
    {
      "id": 11,
      "category": "dolci",
      "title": "Tiramisù",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "imageUrl": "https://michelefenu.github.io/tnv-academy-IX/the-net-pizza-bootstrap/assets/images/tiramisu.jpg",
      "price": 6,
      "available": true,
      "ingredients": [
        "Savoiardi",
        "Zabaione",
        "Caffe"
      ],
      "allergens": [
        "Glutine"
      ],
      "nutritionalValues": {
        "kcal": "145",
        "totalFat": "6g",
        "saturatedFat": "6g",
        "cholesterol": "53mg",
        "carbohydrate": "1,5g",
        "sodium": "1203 mg",
        "protein": "21g"
      }
    },
    {
      "id": 12,
      "category": "dolci",
      "title": "Torta della Nonna",
      "description": "Una torta molto buona.",
      "imageUrl": "https://michelefenu.github.io/tnv-academy-IX/the-net-pizza-bootstrap/assets/images/tiramisu.jpg",
      "price": 7,
      "available": true,
      "ingredients": [
        "Savoiardi",
        "Zabaione",
        "Caffe"
      ],
      "allergens": [
        "Glutine"
      ],
      "nutritionalValues": {
        "kcal": "145",
        "totalFat": "6g",
        "saturatedFat": "6g",
        "cholesterol": "53mg",
        "carbohydrate": "1,5g",
        "sodium": "1203 mg",
        "protein": "21g"
      }
    }
  ];

  piattiAntipasti: Piatto[] = [];
  piattiPrimi: Piatto[] = [];
  piattiDolci: Piatto[] = [];

  constructor() {
    this.piattiAntipasti = this.menu.filter(x => x.category === 'antipasti');
    this.piattiPrimi = this.menu.filter(x => x.category === 'primi');
    this.piattiDolci = this.menu.filter(x => x.category === 'dolci');
  }
}
