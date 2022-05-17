import {Component, OnInit} from "@angular/core";
import {IRestaurants} from "../../interfaces/i-restaurants";
import restaurantsData from "../../../assets/jsons/restaurants.json";
import {IRestaurantSections} from "../../interfaces/irestaurant-sections";
import {ISectionItems} from "../../interfaces/isection-items";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  restaurants: IRestaurants[] = [];
  selectedItems:any[]=[];
  sectionList: IRestaurantSections[] = [
    {id:1,name:"burgers"},
    {id:2,name:"pizzas"},
    {id:3,name:"soups"},
    {id:4,name:"pies"},
    {id:5,name:"sandwiches"},
    {id:6,name:"drinks"},
    {id:7,name:"appetizers"},
  ]
  itemsList:ISectionItems[]=[
    {id:1, section:6, imgURL:"https://images.unsplash.com/photo-1481671703460-040cb8a2d909?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", price:32.99},
    {id:2, section:6, imgURL:"https://images.unsplash.com/photo-1486428263684-28ec9e4f2584?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", price:43.00},
    {id:3, section:6, imgURL:"https://images.unsplash.com/photo-1582106245687-cbb466a9f07f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80", price:18.76},
    {id:4, section:6, imgURL:"https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", price:45.44},
    {id:5, section:6, imgURL:"https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1257&q=80", price:25.19},
    {id:6, section:6, imgURL:"https://images.unsplash.com/photo-1497534446932-c925b458314e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80", price:19.99},
    {id:7, section:5, imgURL:"https://images.unsplash.com/photo-1621800043295-a73fe2f76e2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80", price:32.99},
    {id:8, section:5, imgURL:"https://images.unsplash.com/photo-1619531038896-deaff53d151a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80", price:43.00},
    {id:9, section:5, imgURL:"https://images.unsplash.com/photo-1628191010210-a59de33e5941?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", price:18.76},
    {id:11, section:5, imgURL:"https://images.unsplash.com/photo-1481070414801-51fd732d7184?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80", price:45.44},
    {id:12, section:5, imgURL:"https://images.unsplash.com/photo-1627754468549-6ed1a4813a53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", price:25.19},
    {id:14, section:5, imgURL:"https://images.unsplash.com/photo-1622020367723-04057acd56b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80", price:19.99},
    {id:54, section:4, imgURL:"https://images.unsplash.com/photo-1606654837130-355164d4d0e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",price:32.99},
    {id:65, section:4, imgURL:"https://images.unsplash.com/photo-1629228136815-0fedb1808520?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80", price:43.00},
    {id:76, section:4, imgURL:"https://images.unsplash.com/photo-1621743478914-cc8a86d7e7b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80", price:18.76},
    {id:86, section:4, imgURL:"https://images.unsplash.com/photo-1624299831638-82c15fcafd2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", price:45.44},
    {id:43, section:4, imgURL:"https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", price:25.19},
    {id:23, section:4, imgURL:"https://images.unsplash.com/photo-1545668855-b923f0176935?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80", price:19.99},
    {id:87, section:3, imgURL:"https://images.unsplash.com/photo-1578861256505-d3be7cb037d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", price:32.99},
    {id:86, section:3, imgURL:"https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80", price:43.00},
    {id:64, section:3, imgURL:"https://images.unsplash.com/photo-1604152135912-04a022e23696?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", price:18.76},
    {id:43, section:3, imgURL:"https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", price:45.44},
    {id:16, section:3, imgURL:"https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80", price:25.19},
    {id:61, section:3, imgURL:"https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", price:19.99},
    {id:62, section:2, imgURL:"https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", price:32.99},
    {id:63, section:2, imgURL:"https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", price:43.00},
    {id:74, section:2, imgURL:"https://images.unsplash.com/photo-1593504049359-74330189a345?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80", price:18.76},
    {id:75, section:2, imgURL:"https://images.unsplash.com/photo-1571066811602-716837d681de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=536&q=80", price:45.44},
    {id:76, section:2, imgURL:"https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=728&q=80", price:25.19},
    {id:88, section:2, imgURL:"https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", price:19.99},
    {id:90, section:1, imgURL:"https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", price:32.99},
    {id:91, section:1, imgURL:"https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=722&q=80", price:43.00},
    {id:92, section:1, imgURL:"https://images.unsplash.com/photo-1603064752734-4c48eff53d05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80", price:18.76},
    {id:93, section:1, imgURL:"https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80", price:45.44},
    {id:94, section:1, imgURL:"https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80", price:25.19},
    {id:100, section:1, imgURL:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2598&q=80", price:19.99},
  ]

  restaurantsId:any
  sectionId:any;
  isPicked:boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.restaurants = restaurantsData;
  }
  pickRestaurants(id:number){
    console.log(id)
    this.restaurantsId =id;
    this.isPicked =true
  }
  pickSection(id:number){
    console.log(id)
    this.sectionId =id;
  }

  filterItemsBySection(sectionId:number):ISectionItems[]{
    return  this.itemsList.filter((value)=>{
      return value.section == sectionId;
    })
  }

  addItemToCart(itemId:any,price:any,sectionId:any,restaurantId:any){
    this.selectedItems.push({itemId,price,sectionId,restaurantId})
    console.log(this.selectedItems)
  }
  removeItemFromCart(itemId:any,price:any,sectionId:any,restaurantId:any){
    let findIndex = this.selectedItems.indexOf([{itemId,price,sectionId,restaurantId}])
    this.selectedItems.slice(findIndex);
    console.log(findIndex)
  }
  getTotal(){
    let total = 0;
    for (let selectedItemsElement of this.selectedItems) {
      total += selectedItemsElement.price;
    }
    return total

  }

}
