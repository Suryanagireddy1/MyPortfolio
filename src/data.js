export const roles = ['Data Scientist', 'ML Engineer', 'NLP Enthusiast'];

export const navItems = [
  ['About', 'about'], ['Skills', 'skills'], ['Experience', 'experience'], ['Projects', 'projects'], ['Contact', 'contact'],
];

export const profile = {
  name: 'Surya',
  tagline: 'Data Science & AI graduate (MSc, 2026) specializing in Machine Learning, NLP, and end-to-end ML pipelines',
  location: 'Based in Visakhapatnam, open to relocating to Hyderabad / Indore',
  email: 'suryanagireddy7564@gmail.com',
  github: 'https://suryanagireddy1.github.io/',
  linkedin: 'https://www.linkedin.com/in/surya-nagireddy-568728245/',
  resume: 'resume.pdf',
};

export const skillGroups = [
  { title: 'Languages', level: 88, skills: ['Python', 'SQL'] },
  { title: 'ML / DL', level: 86, skills: ['XGBoost', 'LightGBM', 'CatBoost', 'Scikit-learn', 'TensorFlow/Keras', 'SMOTE', 'Ensembling'] },
  { title: 'NLP', level: 82, skills: ['TF-IDF', 'Text classification', 'Sentiment analysis', 'Multilingual text'] },
  { title: 'Tools', level: 78, skills: ['Streamlit', 'Flask', 'Git', 'Power BI/Excel', 'pptxgenjs/docx automation'] },
  { title: 'Concepts', level: 84, skills: ['Feature engineering', 'SHAP explainability', 'A/B testing', 'Statistics'] },
];

export const experiences = [
  { org: 'AIVariant', type: 'Internship', title: "Alzheimer's Disease Classification", metric: '~95% accuracy', details: 'Compared 6 ML algorithms and built a 4-method feature voting system using Chi-Square, T-Test, Mutual Information, and Random Forest importance with Streamlit deployment.' },
  { org: 'ExcelR', type: 'Internship / Capstone', title: 'Course Recommendation System', metric: 'Distinction', details: 'Created a TF-IDF + SVD hybrid recommender and completed the ExcelR Data Science certification with Distinction.' },
];

export const projects = [
  { title: 'FraudSentinel AI', metric: 'AUC 0.91', description: 'Explainable fraud detection on IEEE-CIS with 590K+ transactions, 3.5% fraud rate, SHAP insights, and cosine-similarity RAG over 2,000 historical fraud cases.', tags: ['Random Forest', 'SMOTE', 'SHAP', 'RAG', 'Flask'], demo: 'https://fraudsentinel-ai.onrender.com', github: '#' },
  { title: 'Customer Churn Prediction', metric: 'F1 0.88', description: 'XGBoost + SMOTE pipeline tuned for retention analytics and deployed through Streamlit for business-friendly exploration.', tags: ['XGBoost', 'SMOTE', 'Streamlit', 'AUC 0.91'], demo: '#', github: '#' },
  { title: 'NLP Sentiment Analysis', metric: '~78.8% accuracy', description: 'MSc capstone for multi-class sentiment classification on Amazon Samsung reviews with macro-F1 optimization and Hindi/Devanagari handling.', tags: ['NLP', 'TF-IDF', 'Feature engineering', 'Macro-F1'], demo: '#', github: '#' },
  { title: "Alzheimer's Disease Classification", metric: '~95% accuracy', description: 'Six-algorithm comparison with 4-method feature voting and an interactive Streamlit app for model-assisted classification.', tags: ['Scikit-learn', 'Feature voting', 'Streamlit'], demo: '#', github: '#' },
  { title: 'Course Recommendation System', metric: 'Hybrid recommender', description: 'Recommendation engine combining TF-IDF content signals with SVD latent factors for personalized course discovery.', tags: ['TF-IDF', 'SVD', 'Recommender'], demo: '#', github: '#' },
  { title: 'Screen Addiction Prediction', metric: 'OOF AUC ~0.965', description: 'Kaggle-style binary classifier using LightGBM, XGBoost, and CatBoost ensembling with robust out-of-fold validation.', tags: ['LightGBM', 'XGBoost', 'CatBoost', 'Ensemble'], demo: '#', github: '#' },
];
