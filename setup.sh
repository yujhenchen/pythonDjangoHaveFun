#!/bin/bash

MY_ENV="python_django_env"

# conda update -y conda
conda update -n base -c defaults conda

conda --version
conda env list

ENVS=$(conda env list)
if [[ $ENVS = *"$MY_ENV"* ]]; then
    echo "${MY_ENV} exists, will not create a new env"
else
    echo "${MY_ENV} does not exist, will create a new env"
    conda create --name $MY_ENV -y
    
    # Install package
    conda install -c conda-forge --name $MY_ENV django -y
fi 

conda activate $MY_ENV
conda env list

conda list
