import React, {Component, forwardRef} from 'react';
import MaterialTable, {MTableToolbar} from 'material-table';
import {connect} from "react-redux";
import {selectCompanies} from "../redux/selectors";

import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import {addCompany, deleteCompany, editCompany} from "../redux/companies";
import {withTranslation} from "react-i18next";


class CompaniesContainer extends Component {

    render() {
        const {t, remove, companies, create, edit, i18n} = this.props;
        const columns = [
            {title: 'id', field: 'id', editable: 'never'},
            {title: t("company.name"), field: 'name'}
        ];


        const tableIcons = {
            Add: forwardRef((props, ref) => <AddBox {...props} ref={ref}/>),
            Check: forwardRef((props, ref) => <Check {...props} ref={ref}/>),
            Clear: forwardRef((props, ref) => <Clear {...props} ref={ref}/>),
            Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref}/>),
            DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref}/>),
            Edit: forwardRef((props, ref) => <Edit {...props} ref={ref}/>),
            Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref}/>),
            Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref}/>),
            FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref}/>),
            LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref}/>),
            NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref}/>),
            PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref}/>),
            ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref}/>),
            Search: forwardRef((props, ref) => <Search {...props} ref={ref}/>),
            SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref}/>),
            ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref}/>),
            ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref}/>)

        };
        return (
            <MaterialTable
                components={{
                    Toolbar: props => (
                        <div style={{backgroundColor: '#e8eaf5'}}>
                            <MTableToolbar {...props} />
                        </div>
                    )
                }}
                icons={tableIcons}
                title=""
                columns={columns}
                data={companies}
                editable={{
                    onRowDelete: async oldData => {
                        remove(oldData.id)
                    },
                    onRowAdd: async newData => {
                        create(newData.name)
                    },
                    onRowUpdate: async (newData, oldData) => {
                        edit(oldData.id, newData.name);
                    }


                }}
                localization={i18n.store.data[i18n.language].translation.table}
            />
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        remove: (id) => dispatch(deleteCompany(id)),
        create: (name) => dispatch(addCompany(name)),
        edit: (id, newName) => dispatch(editCompany(id, newName))
    }
};

const mapStateToProps = (state) => {
    return {
        companies: selectCompanies(state)
    };
};

const Translation = withTranslation()(CompaniesContainer);
export default CompaniesContainer = connect(mapStateToProps, mapDispatchToProps)(Translation);