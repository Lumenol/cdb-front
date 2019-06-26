import React, {Component, forwardRef} from 'react';
import MaterialTable from 'material-table';
import {connect} from "react-redux";
import {selectUsers} from "../redux/selectors";

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
import {withTranslation} from "react-i18next";
import {deleteUser, editUser} from "../redux/users";
import Switch from "@material-ui/core/Switch";


class UsersContainer extends Component {
    onChange = (event) => {
        this.props.editUser(event.target.value, event.target.checked ? ["ADMIN"] : ["USER"]);
        console.log(event.target.value + " " + event.target.checked);

    };

    render() {
        const {t, remove, users, i18n} = this.props;
        const columns = [
            {title: 'id', field: 'id'},
            {title: t("user.login"), field: 'login'},
            {title: t("user.role"), field: 'admin'}
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


        const data = users.map((user) => ({
            ...user,
            admin: (<Switch checked={user.admin} value={user.id} onChange={this.onChange}/>)
        }));

        return (
            <MaterialTable
                icons={tableIcons}
                title={t("users")}
                columns={columns}
                data={data}
                editable={{
                    onRowDelete: async oldData => {
                        remove(oldData.id)
                    },
                    onRowAdd: async newData => {
                    }
                }}
                localization={i18n.store.data[i18n.language].translation.table}
            />
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        remove: (id) => dispatch(deleteUser(id)),
        editUser: (id, newRole) => dispatch(editUser(id, newRole))

    }
};

const mapStateToProps = (state) => {
    return {
        users: selectUsers(state)
    };
};

const Translation = withTranslation()(UsersContainer);
export default UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Translation);