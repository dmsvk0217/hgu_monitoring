import React, { useEffect } from 'react'
import './StatisticsMonthView.css'
import CustomGraph from "../../../components/CustomGraph/CustomGraph";
import CustomTable from "../../../components/CustomTable/CustomTable";
import SMSelection from './SMSelection/SMSelection';
import { chartData, chartOptions } from './SMGraphConfig';
import { columns } from "./SMTableConfig";
import DownloadButton from "../../../components/DownloadButton/DownloadButton";

import useSMStore from '../../../store/SMStore';

function StatisticsMonthView(){
    const { tableData } = useSMStore();

    return (
        <div className='SM-container'>
            <div className='SM-content-container'>
                <SMSelection/>
                <DownloadButton data={tableData?tableData:[]}></DownloadButton>
                <CustomTable data={tableData?tableData:[]} columns={columns}></CustomTable>
                <hr className='SM-Month'></hr>
                <p className="SM-graph-title"> | 그래프 보기 | </p>
                <CustomGraph data={chartData} options={chartOptions}></CustomGraph>
            </div>
        </div>
    );
}

export default StatisticsMonthView;