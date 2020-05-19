import React, { Component } from "react";
import { compose } from "recompose";
import Navigation from '../Navigation';
import PropTypes from "prop-types";
import { withFirebase } from "../Firebase/context";
import { withAuthorization } from "../Session";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
const styles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: "white",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: "flex",
    alignItems: "center"
  }
}));
class RecipesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      recipes: [],
      ingredients: [],
      open: false,
      name: "",
      imageUrl: "",
      error: null,
      checkedItems: new Map(),
      chosenItems: [],
      steps: ""
    };
  }
  componentDidMount() {
    this.setState({ loading: true });
    this.unsubscribe = this.props.firebase.recipes().onSnapshot(snapshot => {
      let recipes = [];
      snapshot.forEach(doc => recipes.push({ ...doc.data() }));
      this.setState(
        {
          recipes,
          loading: false
        },
        () => console.log(JSON.stringify(this.state.recipes) + "kk")
      );
    });
    this.unsubscribe_ = this.props.firebase
      .ingredients()
      .onSnapshot(snapshot => {
        let ingredients = [];
        snapshot.forEach(doc => ingredients.push({ ...doc.data() }));
        this.setState(
          {
            ingredients,
            chosenItems: ingredients,
            loading: false
          },
          () => console.log(JSON.stringify(this.state.ingredients) + "kk")
        );
      });
  }
  componentWillUnmount() {
    this.unsubscribe();
    this.unsubscribe_();
  }
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  onNew = () => {
    this.setState({ error: null });
    console.log("new");
    let isIngredients = false;
    let newArray = {};
    let checkArray = this.state.chosenItems;
    for (let i = 0; i < checkArray.length; i++) {
      if (checkArray[i].checked) {
        isIngredients = true;
        break;
      }
    }
    if (this.state.name != "" && this.state.steps != "" && isIngredients) {
      for (let i = 0; i < checkArray.length; i++) {
        if (checkArray[i].checked) {
          newArray[checkArray[i].name.toLowerCase()] =  checkArray[i];
        }
      }
      var Ref = this.props.firebase.db
        .collection("recipes")
        .doc(this.state.name.toLowerCase());
      Ref.get().then(doc => {
        if (doc.exists) {
          //      console.log("doc exists " + "\n" + "\n" + "\n" + "\n" + "\n" + "\n");
          this.setState({ error: this.state.name + " already exists" });
        } else {
          // console.log(
          //   "doc not exists " + "\n" + "\n" + "\n" + "\n" + "\n" + "\n"
          // );
          Ref.set(
            {
              steps: this.state.steps,
              name: this.state.name,
              ingredients: newArray,
              image: this.state.imageUrl
            },
            { merge: true }
          ).then(
            this.setState({ open: false })
            //   window.location.reload()
          );
        }
      });
    }
  };
  handleChange = async index => {
    let newItems = this.state.chosenItems.slice();
    newItems[index].checked = !newItems[index].checked;
    this.setState({ chosenItems: newItems }, () =>
      console.log(this.state.chosenItems)
    );
  };
  render() {
    const { classes } = this.props;
    const recipes_data = this.state.recipes.map(
      function(item, index) {
        return (
          <tr>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>
              {Object.keys(item.ingredients)
                .map(function(k) {
                  return k;
                })
                .join(",")}
            </td>
            <td>{item.steps}</td>
          </tr>
        );
      }.bind(this)
    );
    const ingredients_data = this.state.ingredients.map(
      function(item, index) {
        return (
          <label
            className="checkbox-inline"
            style={{ display: "inline", marginLeft: 10, color: "white" }}
          >
            <input
              onChange={this.handleChange.bind(this, index)}
              type="checkbox"
              value=""
              name={item.name}
            />
            {item.name}
          </label>
        );
      }.bind(this)
    );
    var myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "gorge",
        uploadPreset: "ffo-dashboard",
        sources: ["local", "url", "image_search"],
        googleApiKey: "AIzaSyBU4BCE2L3Yth8S3m7LOfZVAx-IxNzQJHw",
        multiple: false
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info.secure_url);
          this.setState({ imageUrl: result.info.secure_url });
        }
      }
    );
    return (
      <div>
      <Navigation />
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}
          open={this.state.open}
          onClose={() => this.setState({ open: false })}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={this.state.open}>
            <div
              className="wrap-modal"
            >
              <h2 id="transition-modal-title" style={{ color: "white" }}>
                New Recipe
              </h2>
              {this.state.error && (
                <p style={{ color: "white" }}>{this.state.error}</p>
              )}
              <div
                className="wrap-input100 validate-input"
                data-validate="Enter Name"
              >
                <input
                  name="name"
                  className="input100"
                  value={this.state.name}
                  onChange={this.onChange}
                  type="text"
                  placeholder="Name"
                />
                <span
                  className="focus-input100"
                  data-placeholder="&#xf207;"
                ></span>
              </div>
              <div>{ingredients_data}</div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Enter Steps"
              >
                <textarea
                  name="steps"
                  className="input100"
                  style={{ marginNTop: 30, marginBottom: 30 }}
                  value={this.state.steps}
                  onChange={this.onChange}
                  placeholder="Steps"
                />
                <span
                  className="focus-input100"
                  data-placeholder="&#xf207;"
                ></span>
              </div>
              <button
                id="upload_widget"
                class="cloudinary-button"
                onClick={() => myWidget.open()}
                style={{ marginBottom: 20, marginTop: 20, marginRight:20, backgroundColor: 'white', color:'black' }}
              >
                Upload Image
              </button>
              <button
                id="upload_widget"
                class="cloudinary-button"
                onClick={this.onNew}
              >
                Done
              </button>
            </div>
          </Fade>
        </Modal>
        <span
          className="login100-form-title p-b-34 p-t-27"
          style={{ color: "black" }}
        >
          Recipes
        </span>
        <button
          className="cloudinary-button"
          style={{ marginBottom: 20, marginLeft: 20, backgroundColor: 'white', color:'black', border: '2px solid #EF383F' }}
          onClick={() =>
            this.setState({ open: true }, () => console.log("fkf"))
          }
        >
          New Recipe
        </button>
        <table id="customers">
          <tbody>
            <tr>
              <th>S/N</th>
              <th>Name</th>
              <th>Ingredients</th>
              <th>Steps</th>
              {/* <th>Action</th> */}
            </tr>
            {recipes_data}
          </tbody>
        </table>
      </div>
    );
  }
}
RecipesComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

const Recipes = compose(
  withFirebase,
  withStyles(styles)
)(RecipesComponent);
const condition = authUser => !!authUser;
// export default withStyles(styles)(Recipes);
export default withAuthorization(condition)(Recipes);
