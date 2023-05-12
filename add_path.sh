#!/bin/bash
echo # add LinFu to path >> ~/.bashrc
echo export PATH="$HOME/Documents/GitHub/LinFu/cmd:$PATH" >> ~/.bashrc
echo # add Linfu to path >> ~/.zshrc
echo export PATH="$HOME/Documents/GitHub/LinFu/cmd:$PATH" >> ~/.zshrc

export PATH="$HOME/Documents/GitHub/LinFu/cmd:$PATH"
sudo chmod +x $HOME/Documents/GitHub/LinFu/cmd/*
