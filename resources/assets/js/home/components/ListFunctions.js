import axios from "axios";

export const getList = () => {
  return axios
    .get("users/allusers", {
      headers: { "Content-Type": "application/json" }
    })
    .then(res => {
      var data = [];
      Object.keys(res.data).forEach(function(key) {
        var val = res.data[key];
        data.push([
          val.first_name,
          val.middle_name,
          val.last_name,
          val.username,
          val.role_id,
          val.password
        ]);
      });

      return data;
    });
};

export const addToList = term => {
  return axios
    .post(
      "api/task",
      {
        task_name: term
      },
      {
        headers: { "Content-Type": "application/json" }
      }
    )
    .then(function(response) {
      console.log(response);
    });
};

export const deleteItem = term => {
  axios
    .delete(`api/task/${term}`, {
      headers: { "Content-Type": "application/json" }
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
};

export const updateItem = (term, id) => {
  return axios
    .put(
      `api/task/${id}`,
      {
        task_name: term
      },
      {
        headers: { "Content-Type": "application/json" }
      }
    )
    .then(function(response) {
      console.log(response);
    });
};
