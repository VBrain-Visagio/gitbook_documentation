.. Forecast documentation master file, created by
   sphinx-quickstart on Wed Sep 22 14:14:14 2021.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Welcome to Forecast's documentation!
====================================

This is the documentation of VBrain's Forecast module. It has 2 main infos:

:General Considerations: The steps that contain the input and output process, such as DataReader and OutputProcessor

:Pipeline Steps: The steps that contain the data preparation steps, such as missing values treatment and aggregation

General Considerations
-------------------------------------

The forecast module consist in the contrucion of pipelines that transform the data and create a model that can be used for prediction

It uses a ModelObject to deal with data that will be passed to each step. 

The forecast module contains models for time series, including classical statistical models and machine learning models. It contains also steps for prepare the data for each respective model. 

The forecast is based on a pair (item,location) for which a demand will be predicted, with a indicated frequency and horizon. 

Pipeline Steps
-------------------------------------

The forecast pipeline is actualy a meta pipeline, consisting of a pipeline responsibe for creating a model (that is later used for prediction),
a pipeline to be executed after the model creation (post_creation), a pipeline to be executed after the prediction (post_execution) and a pipeline
to eventually evaluate the prediction. 

Each pipeline is made by specific steps indicated in a params archive. Some steps are pecific and can only be used in one of the pipelines, but other are more general and can be used in
different pipelines (as the DatReader step for instance). 

To make easy to understand each step they were separated in input interface (steps related to ingestion of data), datapre (steps related to data preparation), model (models avaiable) and output interface (steps that generate outputs)
Check the examples to facilitate the comprehension of the pipeline construction. 

.. toctree::
   :maxdepth: 2
   :caption: Contents:

   forecast_rst_files/input_interface
   forecast_rst_files/dataprep
   forecast_rst_files/model
   forecast_rst_files/output_interface
   forecast_rst_files/examples




Indices and tables
==================

* :ref:`genindex`
* :ref:`modindex`
* :ref:`search`
