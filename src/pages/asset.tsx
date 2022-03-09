import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import 'antd/dist/antd.css';
import '../App.css';
import { Card, Image, Row, Col } from 'antd';
import Moment from 'moment';
import { Asset } from "../types";

function AssetList() {
  const [asset, setAsset] = useState<Asset>();
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = React.useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = React.useState("");
  const assetId = useParams()

  React.useEffect(() => {
    axios
      .get<Asset>("https://my-json-server.typicode.com/tractian/fake-api/assets/"+assetId.id)
      .then(response => {
        setAsset(response.data);
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
  
  }, [assetId, asset]);



  const getStatus = (status: string): string => {
    let currentStatus = ''
    switch(status) {
      case 'inAlert': {
        currentStatus = 'Em Alerta';
        break;
      }
      case 'inDowntime': {
        currentStatus = 'Em Manutenção';
        break;
      }
      case 'inOperation': {
        currentStatus = 'Em Operação';
        break;
      }
      default: {
        break
      }
    }
    return currentStatus
  }

  const getHealthClass = (healthScore: number): string => {
    let healthClass = ''
    if (healthScore > 75) healthClass = 'health-ok'
    else if (healthScore > 25) healthClass = 'health-warning'
    else healthClass = 'health-alert'
    return healthClass
  }

  const getDate = (date: Date): string => {
    Moment.locale('br')
    let formatedDate = Moment(date).format('DD/MM/YY, hh:mm')
    return formatedDate
  }

  const checkParam = (param: any): boolean => {
    if( typeof param !== 'undefined' && param !== null ) {
      return true
    }
    return false
  }

  return (
    <div className="list-holder">
      {asset ? 
        <Row>
          <Col span={6}>
            <Card
              title={asset.name}
              className='card-asset'
            >
              <p>Model: {asset.model}</p>
              <p>{"Status: "}
                <span className={"status-" + asset.status}>
                  {getStatus(asset.status)}
                </span>
              </p>
              <p>{"Health Score: "}
                <span className={getHealthClass(asset.healthscore)}>
                  {asset.healthscore}
                </span>
              </p>
              <p>Model: {asset.model}</p>
              <p>Especificações:</p>
              {checkParam(asset.specifications.rpm) && 
                <p>RPM: {asset.specifications.rpm}</p>
              }
              <p>Temperatura Máxima: {asset.specifications.maxTemp}</p>
              {checkParam(asset.specifications.power) && 
                <p>Power: {asset.specifications.power}</p>
              }
              <p>Metrics:</p>
              <p>Totla Collectes Uptime: {asset.metrics.totalCollectsUptime}</p>
              <p>Total Uptime: {asset.metrics.totalUptime}</p>
              <p>Last Uptime: {getDate(asset.metrics.lastUptimeAt)}</p>
            </Card>
          </Col>
          <Col span={10} offset={4}>
            <div>
              <Image
                className="assetImage"
                width={300}
                src={asset.image}
              />
            </div>
          </Col>
        </Row> :
        <div>
        </div>
      }
    </div>
  );
}

export default AssetList;
