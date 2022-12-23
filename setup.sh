#!/bin/bash

MY_ENV="myenv"

conda update -y conda

conda --version
conda env list

conda create --name myenv -y
conda env list

conda activate myenv
conda env list

# Install package
conda install -c conda-forge --name $MY_ENV django -y

conda list
