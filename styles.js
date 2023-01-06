import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2E2E2',    
  },
  header: {
    alignItems: 'center',  
  },
  input: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    borderEndWidth: 1,
    borderColor: '#DDD',
    fontSize: 18,
    padding: 10,
    width: '90%',
  },
  texto: {
    marginTop: 25,
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 15
  },
  areaBtn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 15,
  },
  botao: {
    backgroundColor: '#1d75cf',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 5,
  },
  botaoText: {
    fontSize: 22,
    color: '#FFF',
  },
  resultado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemText: {
    fontSize: 22,
  },
})