import React, { useContext } from "react";
import { AssetsContext } from "../contexts/assetsProvider";
import 'antd/dist/antd.css';
import '../App.css';
import { Card, Row, Col } from 'antd';
import Moment from 'moment';
import { Asset } from "../types";

import Highcharts from "highcharts/highstock";
import PieChart from "highcharts-react-official";

function AssetList() {
  const { assetList, addAsset } = useContext(AssetsContext);

  const assetsInOperation = assetList.filter(asset => asset.status === "inOperation").length
  const assetsInAlert = assetList.filter(asset => asset.status === "inAlert").length
  const assetsInDowntime = assetList.filter(asset => asset.status === "inDowntime").length

  const optionsPie = {
    chart: {
      type: "pie"
    },
    title: {
      text: 'Status dos Ativos'
    },
    series: [
      {
        data: [
          {
            name: 'Em Operação',
            y: assetsInOperation,
            color: "green"
          },
          {
            name: 'Em Alerta',
            y: assetsInAlert,
            color: "red"
          },
          {
            name: 'Em Manutenção',
            y: assetsInDowntime,
            color: "grey"
          }
        ]
      }
    ]
  };

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

  return (
    <div className="list-holder">
      <Row>
        <Col span={6}>
          {assetList.map((asset: Asset) => (
            <Card
              title={asset.name}
              extra={<a href={'assets/' + asset.id.toString()}>More</a>}
              className='card-asset'
            >
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
              <p>Last Uptime: {getDate(asset.metrics.lastUptimeAt)}</p>
            </Card>
          ))}
        </Col>
        <Col span={10} offset={4}>
          <div>
            <PieChart highcharts={Highcharts} options={optionsPie} />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default AssetList;
