import { StyleSheet, Text, View,Image, ScrollView, TouchableOpacity,useColorScheme } from 'react-native'
import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { setCart } from '../redux/slices/cartSlice'
import Arrow from 'react-native-vector-icons/MaterialIcons'
import CartButton from '../components/Buttons/CartButton'
import Ionicons from 'react-native-vector-icons/Ionicons'
import type { CartState } from '../redux/slices/cartSlice'
import { add } from 'react-native/types_generated/Libraries/Animated/AnimatedExports'

const ProductScreen = ({route}) => {
  const { product,category } = route.params;
  //console.log('product: ',product)
  const [showDescription, setShowDescription] = useState<boolean>(false);
  const [showReview, setShowReview] = useState<boolean>(false)
  const [pressedColor, setPressedColor] = useState(null);
  //console.log('caregory: ',route.params)
  const [addToCartPressed, setAddToCartPressed] = useState<CartState>({
    category: category,
    name: product.productText,
    size: '',
    color: '',
    quantity: 1,
    image:product.image,
    price:product.productPrice,
    priceDisplay:product.productPrice
  });
  const colorScheme = useColorScheme();
  const colors = ['#ee6969', '#e7c0a7', 'black'];
  const size = ['S','M','L']
  const dispatch = useDispatch()
  function addToCart(){
    //console.log('product: ',product)
    dispatch(setCart(addToCartPressed))
  }

   const cartItems = useSelector((state)=>state.cart)
    console.log('cartItems: ',cartItems)

  return (
    <View style={[styles.container, colorScheme === 'dark' && { backgroundColor: '#141416' }]}>
         <View style={styles.imageContainer}> 
            <Image source={product.image} style={styles.image} />
         </View> 
        <ScrollView style={[styles.bottomContainer, colorScheme === 'dark' && { backgroundColor: '#141416' }]}>
            <View style={[styles.productNameContainer, colorScheme === 'dark' && { borderBottomColor: '#23262f' }]}>
                <Text style={[styles.productInfoText,{ color: colorScheme === 'dark' ? 'white' : 'black' }]}>{product.productText}</Text>
                <Text style={[styles.productInfoText,{ color: colorScheme === 'dark' ? 'white' : 'black' }]}>{`$ ${product.productPrice}`}</Text>
            </View>
            <View style={[styles.productNameContainer,colorScheme === 'dark' && { borderBottomColor: '#23262f' }]}>
                <View style={{gap:7}}>
                    <Text style={[styles.colorText,{ color: colorScheme === 'dark' ? '#b1b5c3' : '#777e90' }]} >Color</Text>
                    <View style={styles.colorsContainer}>
                        {
                            colors.map((color,index)=>(
                                <TouchableOpacity
                                key={index}
                                onPressIn={() => {
                                    setPressedColor(color)
                                    setAddToCartPressed({
                                        ...addToCartPressed,
                                        color: color
                                    })
                                }}
                                style={[
                                    styles.colors,
                                    { backgroundColor: color },
                                    pressedColor === color && { elevation: 10 },
                                ]}
                                />
                            ))
                            
                        }
                    </View>
                    
                </View>
                <View style={{gap:7}}>
                     <Text style={{fontSize:15,color:colorScheme === 'dark' ? '#b1b5c3' : '#c5c5c5',}}>Size</Text>
                    <View style={styles.colorsContainer}>
                        {
                            size.map((s,index)=>(
                                <TouchableOpacity 
                                    onPress={()=>{
                                        setAddToCartPressed({
                                            ...addToCartPressed,
                                            size: s
                                        })
                                    }} 
                                    key={index}>
                                    <Text style={[styles.colors,{backgroundColor:'#fafafa'}]}>{s}</Text>
                                </TouchableOpacity>
                            ))
                        }
                    
                    </View>
                </View>  
               
            </View>
            <View style={[styles.productDetails, colorScheme === 'dark' && { borderBottomColor: '#23262f' }]}>
                <Text style={[styles.productDetailsText,{ color: colorScheme === 'dark' ? 'white' : 'black' }]}>Description</Text>
                <TouchableOpacity onPress={()=>{setShowDescription(!showDescription)}}>
                    {
                        showDescription === true ? 
                        <Arrow name='arrow-drop-down' size={26} color={colorScheme === 'dark' ? 'white' : 'black'} /> :
                        <Arrow name='arrow-right' size={26} color={colorScheme === 'dark' ? 'white' : 'black'}/>
                    }
                </TouchableOpacity>
            </View>
             {
                showDescription === true ? 
                    <View style={styles.descriptionContainer}>
                        <Text style={{ color: colorScheme === 'dark' ? 'white' : 'black' }}>
                            {product.description}
                        </Text>
                    </View>
                :null
            }
            <View style={[styles.productDetails, colorScheme === 'dark' && { borderBottomColor: '#23262f' }]}>
                <Text style={[styles.productDetailsText,{ color: colorScheme === 'dark' ? 'white' : 'black' }]}>Reviews</Text>
                <TouchableOpacity onPress={()=>{setShowReview(!showReview)}}>
                    {
                        showReview === true ? 
                         <Arrow name='arrow-drop-down' size={26} color={colorScheme === 'dark' ? 'white' : 'black'}/> :
                        <Arrow name='arrow-right' size={26} color={colorScheme === 'dark' ? 'white' : 'black'}/>

                    }
                </TouchableOpacity>
            </View>
                    {
                        showReview === true ? 
                        <View style={styles.descriptionContainer}>
                           <Text style={{ color: colorScheme === 'dark' ? 'white' : 'black' }}>
                                {product?.review || "No reviews yet."}
                            </Text>
                        </View> :null
                    }

        </ScrollView>
        <CartButton onPress={addToCart} text='Add To Cart'/>
    </View>
  )
}

export default ProductScreen

const styles = StyleSheet.create({
   container: {
    flex: 1,
    //borderColor:'red',
    //borderWidth: 2,
   },
   colorsContainer:{
    flexDirection:'row',
    gap:5,
   },
   image: {
    width: '100%',
    height: 380,
    resizeMode: 'contain',
    borderRadius: 20,
    marginTop: 20,
   },
   imageContainer: {
    width: '100%',
    height: '50%',
   // borderColor:'red',
  //  borderWidth: 2,
    backgroundColor:'#e3e0e7'
   },
   colors:{
    width:20,
    height:20,
    borderWidth:2,
    borderColor:'white',
    borderRadius:50,
    backgroundColor:'red',
   },
   descriptionContainer:{
        width: '100%',
        height: 125, 
       // borderColor:'gray',
       // borderRadius: 20,
       // borderWidth: 2,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:20

   },
    bottomContainer: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        padding: 20,
        // Android shadow
        elevation: 12, // make this higher if still faint

    },

    productNameContainer: {   
        width: '100%',
        height: 85, 
       // borderColor:'gray',
       // borderRadius: 20,
     //   borderWidth: 2,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomWidth: 2,        // width of bottom border
        borderBottomColor: "#f3f3f6",   // color of bottom border
       // padding:20

    },
    productDetails:{
        width: '100%',
        height:50,
        borderColor:'gray',
       // borderRadius: 20,
       // borderWidth: 2,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
      //  padding:10,
        borderBottomWidth: 2,        // width of bottom border
        borderBottomColor: "#f3f3f6",   // color of bottom border
        marginVertical: 5, // optional spacing
    },
    productInfoText:{
        color:'black',
        fontSize:15,
        fontWeight:'900',
    },
    productDetailsText:{
        color:'black',
        fontSize:15,
        fontWeight:'900',
    },
    addToCart:{
        backgroundColor:'#343434',
        width:'100%',
        height:60,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        gap:22
    },
    addToCartText:{
        color:'white',
        fontSize:18,
        fontWeight:'bold'
    },
    colorText:{
        fontSize:17,
        color:'#777e90',
        fontWeight:'bold'
    }
})