import React from 'react';
import './App.css';
import axios from 'axios';

import Router from './routes/router'

interface IAssets {
  id: number;
  sensors: string[];
  model: string;
  status: string;
  healthscore: number;
  name: string;
  image: string[];
  specification: {
    maxTemp: number;
  };
  metrics: {
    totalCollectsUptime: number;
    totalUptime: number;
    lastUptimeAt: Date;
  };
  unitId: number;
  companyId: number;
}

const defaultAssets:IAssets[] = [];

function App() {
  const [assets, setAssets]: [IAssets[], (assets: IAssets[]) => void] = React.useState(defaultAssets);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = React.useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = React.useState("");

  React.useEffect(() => {
    axios
      .get<IAssets[]>("https://my-json-server.typicode.com/tractian/fake-api/assets")
      .then(response => {
        setAssets(response.data);
        setLoading(false);
      })
      .catch(ex => {
        const error =
        ex.response.status === 404
          ? "Resource Not found"
          : "An unexpected error has occurred";
        setError(error);
        setLoading(false);
    });

  }, []);

  
  return (
    <Router />
  )
}

export default App;
