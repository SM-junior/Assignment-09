import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getShoppingCart } from '../../utility/fakedb';
import ViewApply from '../ViewApply/ViewApply';

const AppliedJob = () => {
    const jobData=useLoaderData()
    const [savelocal, setSavelocal] = useState([]);
    useEffect(() => {
        const getLocalDB = getShoppingCart();
        let saveData = [];
        for (const id in getLocalDB) {
          const newLocalData = jobData.find((data) => data.id == id);
          if (newLocalData) {
            saveData.push(newLocalData);
          }
        }
        setSavelocal(saveData);
      }, [jobData]);
      console.log(savelocal);
    return (
        <div>
            {
                savelocal.map(x=><ViewApply
                id={x.id}
                y={x}
                ></ViewApply>)
            }
        </div>
    );
};

export default AppliedJob;