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
      title: "Feel Factor",
      image: "/projects/ml3/images/Title.PNG",
      description: "Decoding Emotions Inside and Out",
      link: "ml3"
    },
    {
      title: "Bet Smart",
      image: "/projects/ml2/title.png",
      description: "Predicting VNL Match Outcomes Through Machine Learning",
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
      description: "Clustering Chess Openings For Enhanced Gameplay",
      link: "adm"
    },
    {
      title: "Data-Driven Victory",
      image: "/projects/dmw1/DMW1_banner.png",
      description: "Feature Analysis using Dimensionality Reduction on CS:GO Player Profiles",
      link: "dmw1"
    },
    {
      title: "Steam Odyssey",
      image: "/projects/dmw2/TITLE.PNG",
      description: "Building a Content-based Recommender System based on Game and User Profiles",
      link: "dmw2"
    }
  ];

  constructor(private router: Router) { }

  navigateToProject(link: string) {
    this.router.navigate([link]);
  }
}
