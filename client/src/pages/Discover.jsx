// import React, { Component } from "react";
// import API from "../utils/API";
// import Card from "../components/Card";
// import Alert from "../components/Alert";

// class Discover extends Component {
//   state = {
//     image: "",
//     match: false,
//     matchCount: 0
//   };

//   // When the component mounts, load the next dog to be displayed
//   componentDidMount() {
//     this.loadNextDog();
//   }

//   handleBtnClick = event => {
//     // Get the data-value of the clicked button
//     const btnType = event.target.attributes.getNamedItem("data-value").value;
//     // Clone this.state to the newState object
//     // We'll modify this object and use it to set our component's state
//     const newState = { ...this.state };

//     if (btnType === "pick") {
//       // Set newState.match to either true or false depending on whether or not the dog likes us (1/5 chance)
//       newState.match = 1 === Math.floor(Math.random() * 5) + 1;

//       // Set newState.matchCount equal to its current value or its current value + 1 depending on whether the dog likes us
//       newState.matchCount = newState.match
//         ? newState.matchCount + 1
//         : newState.matchCount;
//     } else {
//       // If we thumbs down'ed the dog, we haven't matched with it
//       newState.match = false;
//     }
//     // Replace our component's state with newState, load the next dog image
//     this.setState(newState);
//     this.loadNextDog();
//   };

//   loadNextDog = () => {
//     API.getRandomDog()
//       .then(res =>
//         this.setState({
//           image: res.data.message
//         })
//       )
//       .catch(err => console.log(err));
//   };

//   render() {
//     return (
//       <div>
//         <h1 className="text-center">Find New Games to Play</h1>
//         <h3 className="text-center">
//           Thumbs up on any games you want to play!
//         </h3>
//         <Card image={this.state.image} handleBtnClick={this.handleBtnClick} />
//         <h1 className="text-center">
//           You have  {this.state.matchCount} new games to play!
//         </h1>
//         <Alert style={{ opacity: this.state.match ? 1 : 0 }} type="success">
//           We knew you'd like this game!
//         </Alert>
//       </div>
//     );
//   }
// }


// export default Discover;




import React from 'react';
// import axios from 'axios';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Hero from "../components/Hero";



const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
     
      <Hero backgroundImage="https://media.newyorker.com/photos/5ddea430de817400084a1dfb/master/pass/2019-Parkin-VideoGames.gif">
        <h1>Nerd Up</h1>
        {/* <h2>Where it's Cool to be a Nerd</h2> */}
        <p>
            Welcome to Nerd Up™ The place where you can embrace your inner-nerd. Check out news on the trending videom games, and ask the community for tips,tricks, or help. 
        </p>
      <p>Get Your Nerd On!</p>
      </Hero>
      
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
         
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    
    </React.Fragment>
  );
}

// function App(){
//   const [books, setBooks] = . useState(null);
//   const apiURL = "https://www.anapioficeandfire.com/api/books?pageSize=30";
//   const fetchData = async () => {
//       const response = await axios.get(apiURL)
//       setBooks(response.data) 
//   }
//   return (
//       // returned JSX here
//   )
// }

