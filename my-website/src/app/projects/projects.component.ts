import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      title: "Spark up Your Game",
      image: "/projects/bdcc/bdccbanner.png",
      description: "Per Round CS:GO Predictions for Enhanced Sports Analytics \nCo-Authors: Raymundo Java Jr., Shem Harold Castillo, Karth Ian Macalalad",
      link: "bdcc"
    },
    {
      title: "Feel Factor",
      image: "/projects/ml3/images/Title.PNG",
      description: "Decoding Emotions Inside and Out \nCo-Authors: Kiana Alessandra Villaera, Julius Cris Salinas, Roderick Ilagan, Leonard Gail Rizada",
      link: "ml3"
    },
    {
      title: "Bet Smart",
      image: "/projects/ml2/title.png",
      description: "Predicting VNL Match Outcomes Through Machine Learning \nCo-Authors: Arnica Joy Lacson, Raymundo Java Jr., James Ballesteros, Monico Ruben Marquez",
      link: "ml2"
    },
    {
      title: "Machine Learning in Cryptocurrency Markets",
      image: "/projects/ml1/Title.PNG",
      description: "Investigating the Efficacy of Regression Algorithms in Timeseries Cryptocurrency Data",
      link: "ml1"
    },
    {
      title: "Decoding Chess Strategies",
      image: "/projects/adm/header1.png",
      description: "Clustering Chess Openings For Enhanced Gameplay \nCo-Authors: Karth Ian Macalalad, Shem Harold Castillo, Raymundo Java Jr.",
      link: "adm"
    },
    {
      title: "Data-Driven Victory",
      image: "/projects/dmw1/DMW1_banner.png",
      description: "Feature Analysis using Dimensionality Reduction on CS:GO Player Profiles \nCo-Authors: Raymundo Java Jr., James Ballesteros, Merv Derek Camado",
      link: "dmw1"
    },
    {
      title: "Steam Odyssey",
      image: "/projects/dmw2/TITLE.PNG",
      description: "Building a Content-based Recommender System based on Game and User Profiles \nCo-Authors: Rafael Nable, Jamil Hadji Alawi, Karlmarx Rubia, Earl John Gallarde",
      link: "dmw2"
    }
  ];

  constructor(private router: Router) { }

  navigateToProject(link: string) {
    this.router.navigate([link]); 
  }
}
