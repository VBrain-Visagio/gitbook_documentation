# Model steps

## Aws forecast estimator


### class vpipe.steps.models.aws_forecast_estimator.AmazonForecastEstimator()
## Cp estimator


### class vpipe.steps.models.cp_estimator.CPEstimator(params=None)
## Dummy


### class vpipe.steps.models.dummy.DummyEstimator(params=None)
## Lgbm


### class vpipe.steps.models.lgbm.LGBM(params=None)
## Mpmodel


### class vpipe.steps.models.mpmodel.MundoPetEstimator(params=None)

#### score(X, y, sample_weight=None)
Return the coefficient of determination R^2 of the prediction.

The coefficient R^2 is defined as (1 - u/v), where u is the residual
sum of squares ((y_true - y_pred) \*\* 2).sum() and v is the total
sum of squares ((y_true - y_true.mean()) \*\* 2).sum().
The best possible score is 1.0 and it can be negative (because the
model can be arbitrarily worse). A constant model that always
predicts the expected value of y, disregarding the input features,
would get a R^2 score of 0.0.

X

    Test samples. For some estimators this may be a
    precomputed kernel matrix or a list of generic objects instead,
    shape = (n_samples, n_samples_fitted),
    where n_samples_fitted is the number of
    samples used in the fitting for the estimator.

y

    True values for X.

sample_weight

    Sample weights.

score

    R^2 of self.predict(X) wrt. y.

The R2 score used when calling `score` on a regressor uses
`multioutput='uniform_average'` from version 0.23 to keep consistent
with default value of `r2_score()`.
This influences the `score` method of all the multioutput
regressors (except for
`MultiOutputRegressor`).

## Prophet estimator


### class vpipe.steps.models.prophet_estimator.ProphetEstimator(params=None)

#### fit(X, y=None)
Input: 

    X - model object containing the information

Output

    self - the model containing the horizon, frequency of the prevision and

        a dictionary with one prophet model for each tuple of (item_id,location_id)


### vpipe.steps.models.prophet_estimator.prophet_models(self, timeseries, \*\*kwargs)
Create a dictionary with prophet models

Input:

    timeseries - a dictionary with key (item_id,location_id) and value a pandas

Output:

    a dictionary with key (item_id,location_id) and value as a fitted prophet models

## Random forests


### class vpipe.steps.models.random_forests.RandomForests(params=None)
## Sarimax

Atributes:

frequency

    The frequency of the dataset, example: ‘D’ for daily data, ‘W’ for weekly data

horizon: int

    Number of days that will be predicted

br_holidays: bool

    If holidays from Brazil will be used as exog variables in forecast

has_related: bool

    If there is related data to be used as exog variables in forecast

```
# the hyperparam_config file must have:
{
    "model": "sarimax",                # the model that will be executed
    "horizon": 7,                      # how many days after the training will be predicted
    "has_related_data": false,         # if there is exogenous variables in the dataset
    "trend": "t",
    "start_p":1,
    "start_q":1,
    "seasonal":true,
    "m":1,
    "start_P":1,
    "start_Q":1,
    "max_p":5,
    "max_d":5,
    "max_q":5,
    "max_P":5,
    "max_Q":5,
    "max_D":5,
    "max_order" : 100
}
```


### class vpipe.steps.models.SARIMAX.Sarimax(params=None)
Class that contains the SARIMAX method for forecasting. 
The class uses auto_arima for searching the best coefficints of the seasonal and not seasonal AR, I and MA components.


* **Parameters**

    **params** – Dictionary with the params from interface, dataprep, hyperparam and execution config files with this template to be used in hyperparam_config. To see a more detailed documentation of the parameters, search for pmdarima’s auto_arima:



#### fit(X, y=None)
Method that fits the SARIMAX and save the models into an attribute called models_sarimax using all the other step functions from the class


* **Parameters**

    **X** (*class 'Model Object'*) – object from class ModelObject



* **Returns**

    self



* **Return type**

    class Sarimax



#### predict(X)
Method predict from the class SARIMAX


* **Parameters**

    **X** (*class 'Model Object'*) – object from class ModelObject



* **Returns**

    X Object with the predicted value as a new attribute



* **Return type**

    ModelObject



#### sarimax_forecasts(X)
Method predict from the class SARIMAX


* **Parameters**

    **X** (*ModelObject*) – object from class ModelObject



* **Returns**

    A dataframe with forecasts



* **Return type**

    object pandas.DataFrame



#### sarimax_models(timeseries)
Method that fits the best SARIMAX model for the dataset using auto_arima


* **Parameters**

    **timseries** – Dictionary with the timeseries with keys (item_id, location_id)



* **Returns**

    All models fitted with auto_arima with keys (item_id, location_id)



* **Return type**

    dict
