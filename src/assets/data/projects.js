import { v4 as uuidv4 } from 'uuid';
import AutomobileImg from '../images/Automobile.jpg';
import ETLImg from '../images/ETL.png';
import Warehouse_inventoryImg from '../images/Warehouse_inventory.jpg';
import Gradient_descentImg from '../images/Gradient_descent.webp';
import Agro_Spray_SuitImg from '../images/Agro_Spray_Suit.png';

const projects = [
  {
    id: uuidv4(),
    name: 'ETL',
    desc:
      'Lets say a company is facing problems with thier Sales and as a Data Analyst or Data Scientist what insights can you pull out from the Sales data? - SALES ANALYSIS OF A LARGE DTATSET USING ETL-MYSQL-POWER BI |',
    img: ETLImg,
    link: 'https://github.com/immanuvelprathap/ETL-Sales_Analysis_Report---MySQL-PowerBI'
  },
  {
    id: uuidv4(),
    name: 'Automobile-dataset',
    desc:
      'Implemented Data Wrangling and Data Acquisition to pull the Used Car Prices from the Automobile dataset from the web browser | executed Data Pre-Processing | created a Linear Regression Model in order to predict the most suitable Car Price |',
    img: AutomobileImg,
    link: 'https://github.com/immanuvelprathap/Automobile-Data'
  },
  {
    id: uuidv4(),
    name: 'Warehouse Inventory K-Means Clustering',
    desc:
      'Unsupervised Learning | KMeans Clustering Algorithm | generating clusters randomly (in clusters of 5) | Likelihood of the Product Family to fit the Best Cluster | How do we place the particular Product Family and choose the best cluster for it based on the changing in trends of "Low Frequency" to "High Frequency" | ',
    img: Warehouse_inventoryImg,
    link: 'https://github.com/immanuvelprathap/KMeans-Clustering-Unsupervised-ML-Projects'
  },
  {
    id: uuidv4(),
    name: "Gradient_descent",
    desc:
      'Gradirnt Descent Algorithm explained using | Python OOPS | COST-WEIGHT-BIAS | ',
    img: Gradient_descentImg,
    link: 'https://github.com/immanuvelprathap/DataStructures-Algorithms-ML-concepts-using-Python'
  },
  {
    id: uuidv4(),
    name: "Agriculture Project",
    desc:
      'Baccalaureate Project | Dual-integrated System of a PVC suit along with custom-built sprayers ( Arm sprayers and Palm Sprayers) interconnected via Modern Irrigation Systems, replacing the non-autonomous strenuous Knapsack Spraying System, eventually the goal is to design and develop an agribusiness model which can run commercially in present-time | Combining the methods of Microsoft Farm Beats and developing and deploying ML and Neural Network models (ie.., Open CV, CNNs, RNNs etc.) to understand the real-time collected datasets from farm areas using drone mapping software ',
    img: Agro_Spray_SuitImg,
    link: 'https://drive.google.com/file/d/158h0RbqeN4Mrw5YY08m_7iMTisaANuKo/view?usp=sharing'
  },
  
];

export default projects;