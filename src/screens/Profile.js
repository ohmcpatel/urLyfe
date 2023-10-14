import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import DatePicker from 'react-native-datepicker';


const Profile = () => {
  const [dateOfBirth, setDateOfBirth] = useState('');

  return (
    <View style={styles.container}>
      <Image
        style={styles.ellipse3}
        source={{ uri: 'https://via.placeholder.com/157x150' }}
      />
      <Text style={styles.name}>Name</Text>
      <Text style={styles.editProfile}>Edit Profile</Text>
      <Text style={styles.email}>Email</Text>
      <Text style={styles.password}>Password</Text>  <DatePicker
    style={styles.datePicker}
    date={dateOfBirth}
    mode="date"
    placeholder="Select date"
    format="MM/DD/YYYY"
    confirmBtnText="Confirm"
    cancelBtnText="Cancel"
    onDateChange={(date) => setDateOfBirth(date)}
  /><Text style={styles.dateOfBirth}>Date of Birth</Text>
      <View style={styles.phCameraDuotone}>
        <View style={styles.group}>
          <View style={styles.vector1}></View>
          <View style={styles.vector2}></View>
        </View>
      </View>
      <View style={styles.phRectangleThin1}>
        <View style={styles.vector3}></View>
        <Text style={styles.firstNameLastName}>First Name Last Name</Text>
      </View>
      <View style={styles.phRectangleThin2}>
        <View style={styles.vector4}></View>
        <Text style={styles.firstLastGmailCom}>first.last@gmail.com</Text>
      </View>
      <View style={styles.phRectangleThin3}>
        <View style={styles.vector5}></View>
      </View>
      <View style={styles.phRectangleThin4}>
        <View style={styles.vector5}></View>
      </View>
      <View style={styles.phRectangleThin5}>
        <View style={styles.vector6}></View>
        <Text style={{ ...styles.firstLastGmailCom, textDecorationLine: 'none' }}>************</Text>
      </View>
      <View style={styles.phRectangleThin6}>
        <View style={styles.vector7}></View>
        <View style={styles.mdiArrowDownDrop}>
          <View style={styles.vector8}></View>
        </View>
        <Text style={styles.mdiArrowDownDropText}>03/25/2001</Text>
      </View>
      <Text style={styles.countryRegion}>Country/Region</Text>
      <View style={styles.phRectangleThin7}>
        <View style={styles.vector9}></View>
        <View style={styles.mdiArrowDownDrop2}>
          <View style={styles.vector10}></View>
        </View>
        <Text style={styles.unitedStatesOfAmerica}>United States of America</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 390,
    height: 844,
    position: 'relative',
    backgroundColor: 'white',
    borderRadius: 50,
    overflow: 'hidden',
  },
  ellipse3: {
    width: 157,
    height: 150,
    left: 116,
    top: 102,
    position: 'absolute',
    borderRadius: 9999,
  },
  name: {
    left: 44,
    top: 275,
    position: 'absolute',
    color: 'black',
    fontSize: 20,
    fontFamily: 'Open Sans',
    fontWeight: '600',
  },
  editProfile: {
    left: 129,
    top: 50,
    position: 'absolute',
    color: 'black',
    fontSize: 24,
    fontFamily: 'Open Sans',
    fontWeight: '700',
  },
  email: {
    left: 44,
    top: 379,
    position: 'absolute',
    color: 'black',
    fontSize: 20,
    fontFamily: 'Open Sans',
    fontWeight: '600',
  },
  password: {
    left: 44,
    top: 488,
    position: 'absolute',
    color: 'black',
    fontSize: 20,
    fontFamily: 'Open Sans',
    fontWeight: '600',
  },
  dateOfBirth: {
    left: 44,
    top: 598,
    position: 'absolute',
    color: 'black',
    fontSize: 20,
    fontFamily: 'Open Sans',
    fontWeight: '600',
  },
  phCameraDuotone: {
    width: 45,
    height: 47,
    left: 222,
    top: 209,
    position: 'absolute',
  },
  group: {
    width: 36.56,
    height: 33.78,
    left: 4.22,
    top: 5.88,
    position: 'absolute',
  },
  vector1: {
    width: 33.75,
    height: 30.84,
    left: 1.41,
    top: 1.47,
    position: 'absolute',
    opacity: 0.2,
    backgroundColor: '#D9D9D9',
  },
  vector2: {
    width: 36.56,
    height: 33.78,
    left: 0,
    top: 0,
    position: 'absolute',
    backgroundColor: '#D9D9D9',
  },
  phRectangleThin1: {
    width: 383,
    height: 76,
    left: 3,
    top: 302,
    position: 'absolute',
  },
  vector3: {
    width: 299.22,
    height: 49.88,
    left: 41.89,
    top: 13.06,
    position: 'absolute',
    backgroundColor: 'black',
  },
  firstNameLastName: {
    left: 81,
    top: 29,
    position: 'absolute',
    color: '#A2AAAD',
    fontSize: 12,
    fontFamily: 'Poppins',
    fontWeight: '500',
  },
  phRectangleThin2: {
    width: 383,
    height: 76,
    left: 3,
    top: 406,
    position: 'absolute',
  },
  vector4: {
    width: 299.22,
    height: 49.88,
    left: 41.89,
    top: 13.06,
    position: 'absolute',
    backgroundColor: 'black',
  },
  firstLastGmailCom: {
    left: 78,
    top: 29,
    position: 'absolute',
    color: '#A2AAAD',
    fontSize: 12,
    fontFamily: 'Poppins',
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
  phRectangleThin3: {
    width: 383,
    height: 76,
    paddingLeft: 41.89,
    paddingRight: 41.89,
    paddingTop: 13.06,
    paddingBottom: 13.06,
    left: 3,
    top: 406,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  vector5: {
    width: 299.22,
    height: 49.88,
    backgroundColor: 'black',
  },
  phRectangleThin4: {
    width: 383,
    height: 76,
    paddingLeft: 41.89,
    paddingRight: 41.89,
    paddingTop: 13.06,
    paddingBottom: 13.06,
    left: 3,
    top: 406,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  phRectangleThin5: {
    width: 383,
    height: 76,
    left: 3,
    top: 515,
    position: 'absolute',
  },
  vector6: {
    width: 299.22,
    height: 49.88,
    left: 41.89,
    top: 13.06,
    position: 'absolute',
    backgroundColor: 'black',
  },
  mdiArrowDownDrop: {
    width: 44,
    height: 50,
    left: 283,
    top: 13,
    position: 'absolute',
  },
  vector8: {
    width: 18.33,
    height: 10.42,
    left: 12.83,
    top: 20.83,
    position: 'absolute',
    backgroundColor: 'black',
  },
  mdiArrowDownDropText: {
    left: 71,
    top: 31,
    position: 'absolute',
    color: '#A2AAAD',
    fontSize: 12,
    fontFamily: 'Poppins',
    fontWeight: '500',
  },
  countryRegion: {
    left: 44,
    top: 705,
    position: 'absolute',
    color: 'black',
    fontSize: 20,
    fontFamily: 'Open Sans',
    fontWeight: '600',
  },
  phRectangleThin7: {
    width: 383,
    height: 76,
    left: 3,
    top: 730,
    position: 'absolute',
  },
  vector9: {
    width: 299.22,
    height: 49.88,
    left: 41.89,
    top: 13.06,
    position: 'absolute',
    backgroundColor: 'black',
  },
  mdiArrowDownDrop2: {
    width: 44,
    height: 50,
    left: 283,
    top: 13,
    position: 'absolute',
  },
  vector10: {
    width: 18.33,
    height: 10.42,
    left: 12.83,
    top: 20.83,
    position: 'absolute',
    backgroundColor: 'black',
  },
  unitedStatesOfAmerica: {
    left: 70,
    top: 30,
    position: 'absolute',
    color: '#A2AAAD',
    fontSize: 12,
    fontFamily: 'Poppins',
    fontWeight: '500',
  },
  dateOfBirth: {
    left: 44,
    top: 598,
    position: 'absolute',
    color: 'black',
    fontSize: 20,
    fontFamily: 'Open Sans',
    fontWeight: '600',
  },
  datePicker: {
    width: 200, // Customize the width as needed
    marginBottom: 20, // Adjust spacing as needed
  },

});

export default Profile;
