# Path to your oh-my-fish.
set -g OMF_PATH $HOME/.local/share/omf
set -g OMF_CONFIG $HOME/.config/omf

set -g theme_display_ruby no

set -x LC_ALL en_US.UTF-8
set -x LANG en_US.UTF-8

set -x PATH /usr/local/sbin $PATH
set -x EDITOR {{ theme }}

# Load oh-my-fish configuration.
source $OMF_PATH/init.fish
