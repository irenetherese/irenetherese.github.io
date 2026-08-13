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
      description: "Per Round CS:GO Predictions for Enhanced Sports Analytics",
      description_long: "Developed a predictive analytics framework using a 50 GB dataset from 1,512 CS:GO matches, applying big data processing techniques, feature engineering and machine learning models achieving the AUC (0.70).",
      co_authors: ["Raymundo Java Jr.", "Shem Harold Castillo", "Karth Ian Macalalad"],
      link: "bdcc",
      showDetails: false
    },
    {
      title: "Feel Factor",
      image: "/projects/ml3/images/Title.PNG",
      description: "Decoding Emotions Inside and Out",
      description_long: "Fine-tuned a pre-trained wav2vec model for speech emotion detection using an additional dataset with diverse accents, improving accuracy from 69% to 86%.",
      co_authors: ["Kiana Alessandra Villaera", "Julius Cris Salinas", "Roderick Ilagan", "Leonard Gail Rizada"],
      link: "ml3",
      showDetails: false
    },
    {
      title: "Bet Smart",
      image: "/projects/ml2/title.png",
      description: "Predicting VNL Match Outcomes Through Machine Learning",
      description_long: "Developed two machine learning models to predict outcomes of Volleyball Nations League (VNL) matches aimed at optimizing betting strategies and increasing customer retention in the sports betting industry. The models achieved 93.85% accuracy for win-lose predictions and 73.20% for set-score predictions. Conducted comprehensive data collection, preprocessing, and exploratory data analysis using 2023 VNL data. Employed SHAP and LIME for model interpretability, enhancing prediction transparency and trust.",
      co_authors: ["Arnica Joy Lacson", "Raymundo Java Jr.", "James Ballesteros", "Monico Ruben Marquez"],
      link: "ml2",
      showDetails: false
    },
    {
      title: "Machine Learning in Cryptocurrency Markets",
      image: "/projects/ml1/Title.PNG",
      description: "Investigating the Efficacy of Regression Algorithms in Timeseries Cryptocurrency Data",
      description_long: "Investigated the efficacy of regression algorithms, including Linear Regression, RandomForest, and ARIMA, in predicting trends and volatility in Bitcoin and Ethereum. Achieving a Mean Absolute Error of 458.71 for Bitcoin and 32.55 for Ethereum. Highlighted the challenges of forecasting cryptocurrency prices due to high volatility, non-stationary behavior, and the influence of diverse factors such as investor sentiment and regulatory changes.",
      co_authors: [],
      link: "ml1",
      showDetails: false
    },
    {
      title: "Decoding Chess Strategies",
      image: "/projects/adm/header1.png",
      description: "Clustering Chess Openings For Enhanced Gameplay",
      description_long: "Utilizing categorical data clustering to analyze chess openings, enhancing strategic development for players. Employed k-modes clustering on a dataset from chess.com, identifying three key clusters for players across various ELO ratings. Results revealed distinct strategic preferences, with higher-rated players favoring balanced defenses, while mid-level players leaned towards aggressive openings.",
      co_authors: ["Karth Ian Macalalad", "Shem Harold Castillo", "Raymundo Java Jr."],
      link: "adm",
      showDetails: false
    },
    {
      title: "Data-Driven Victory",
      image: "/projects/dmw1/DMW1_banner.png",
      description: "Feature Analysis using Dimensionality Reduction on CS:GO Player Profiles",
      description_long:"Applied dimensionality reduction techniques to analyze features on professional player data in Counter-Strike: Global Offensive (CS:GO), utilizing Principal Component Analysis (PCA) on statistics from 811 players sourced from HLTV.org. The project involved data extraction, cleansing, and normalization, revealing key performance indicators and strategic patterns crucial for competitive play. This research provides actionable insights for player training and match preparation, laying the groundwork for advanced analytics in esports to enhance team strategies and overall performance.",
      co_authors: ["Raymundo Java Jr.", "James Ballesteros", "Merv Derek Camado"],
      link: "dmw1",
      showDetails: false
    },
    {
      title: "Steam Odyssey",
      image: "/projects/dmw2/TITLE.PNG",
      description: "Building a Content-based Recommender System based on Game and User Profiles",
      description_long: "Developed two recommender systems—a unary aggregation-based system and a rules-based system—focused on leveraging user preferences and game content similarities to enhance game discovery and personalization. The project involved preprocessing, exploratory data analysis, followed by the creation of detailed user and item profiles based on the available datasets from Steam. Utilized cosine similarity metrics for validation against a global baseline and Steam’s recommendation algorithms.",
      co_authors: ["Rafael Nable", "Jamil Hadji Alawi", "Karlmarx Rubia", "Earl John Gallarde"],
      link: "dmw2",
      showDetails: false
    }
  ];

  constructor(private router: Router) { }

  navigateToProject(link: string) {
    this.router.navigate([link]); 
  }
}
