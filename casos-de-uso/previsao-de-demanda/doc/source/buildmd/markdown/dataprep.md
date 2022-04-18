# Dataprep steps

## Assertion


### class vpipe.steps.dataprep.assertion.Assertion(params=None)
## Aws cost alert


### class vpipe.steps.dataprep.aws_cost_alert.AWSCostAlert(params=None)
## Dailysales transformer


### class vpipe.steps.dataprep.dailysales_transformer.DailySalesTransformer()
## Dataset filter


### class vpipe.steps.dataprep.dataset_filter.DataFilter()
## Data prep transformer


### class vpipe.steps.dataprep.data_prep_transformer.PrepModelData(params=None)
## Data processor

## Data reader

## Date features extractor


### class vpipe.steps.dataprep.date_features_extractor.DateFeaturesExtractor()
## Feature encoder


### class vpipe.steps.dataprep.feature_encoder.FeatureEconder()
## Fill absent dates


### class vpipe.steps.dataprep.fill_absent_dates.FillAbsentDates()
## Forward looking tranformer


### class vpipe.steps.dataprep.forward_looking_tranformer.ForwardLookingTransformer()
## Holidays

Class that puts holidays columns in your model object.

```
```

{ # on dataprep_config, use the parameters above

> “featurization”:{

>     “holidays”{

>         city :  ‘rio de janeiro’            # The city that you want to get the holidays
>         state : ‘RJ’                        # The state that you want to get the holidays
>         holiday_types : ‘all’               # optional (Dia do Professor), holiday (Sexta Feira Santa) or special (Black friday), ‘all’ for all them
>         coverage :                          # National, municipal or state
>         column_by_type :                    #
>         eve_column :
>         days_of_week_to_drop :
>         holidays_to_drop :

>     }

> }

}


### class vpipe.steps.dataprep.holidays.VHolidays(params=None)
## Lag feature transformer


### class vpipe.steps.dataprep.lag_feature_transformer.LagFeatureTransformer()
## Merge features


### class vpipe.steps.dataprep.merge_features.MergeFeatures()
## Merge geolocation


### class vpipe.steps.dataprep.merge_geolocation.MergeGeolocation()
## Metadata transformer


### class vpipe.steps.dataprep.metadata_transformer.MetadataTransformer(params=None)
## Missing values transformer


### class vpipe.steps.dataprep.missing_values_transformer.MissingValueTransformer(data_frequency='D')
## Prepare related transformer


### class vpipe.steps.dataprep.prepare_related_transformer.PrepareRelatedTransformer()
## Prepare supervised transformer


### class vpipe.steps.dataprep.prepare_supervised_transformer.PrepareSupervisedTransformer()
## Rolling window tranformer


### class vpipe.steps.dataprep.rolling_window_tranformer.RollingWindowTransformer()
## Scaler


### class vpipe.steps.dataprep.scaler.VStandardScaler()
## Stockout transformer


### class vpipe.steps.dataprep.stockout_transformer.StockoutTransformer()
## Time to chistmas transformer


### class vpipe.steps.dataprep.time_to_chistmas_transformer.TimeToChristmasTransformer()
## Time to transformer


### class vpipe.steps.dataprep.time_to_transformer.TimeToTransformer()
## Working day


### class vpipe.steps.dataprep.working_day.WorkingDayTransformer()
