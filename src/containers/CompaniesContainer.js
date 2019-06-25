import React from 'react';
import MaterialTable from 'material-table';
import {useTranslation} from "react-i18next";

export function CompaniesContainer() {
    const {t} = useTranslation();
    const [state, setState] = React.useState({
        columns: [
            {title: 'id', field: 'id'},
            {title: 'Name', field: 'name'}
        ],
        data: []
    });
    return (
        <MaterialTable
            title={t("companies")}
            columns={state.columns}
            data={state.data}
            editable={{
                onRowAdd: newData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            const data = [...state.data];
                            data.push(newData);
                            setState({...state, data});
                        }, 600);
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            const data = [...state.data];
                            data[data.indexOf(oldData)] = newData;
                            setState({...state, data});
                        }, 600);
                    }),
                onRowDelete: oldData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            const data = [...state.data];
                            data.splice(data.indexOf(oldData), 1);
                            setState({...state, data});
                        }, 600);
                    }),
            }}
        />
    );

}