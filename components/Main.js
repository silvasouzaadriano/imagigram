import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchUser} from '../redux/actions';

import Feed from './main/Feed';

const Tab = createMaterialBottomTabNavigator();

const Main = (props) => {
  useEffect(() => {
    props.fetchUser();
  }, []);

  return (
    <Tab.Navigator
      initialRouteName='Feed'
      backBehavior='initialRoute'
      labeled={false}
    >
      <Tab.Screen 
        name='Feed' 
        component={Feed} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name='newspaper-variant' size={26} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    { fetchUser },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Main);