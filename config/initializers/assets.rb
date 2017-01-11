# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
Rails.application.config.assets.precompile += %w( jquery.tubular.1.0.js chessboard.js greetings.js wrapper.js goal_sidebar.js chessboard_config.js )
Rails.application.config.assets.precompile += %w( chessboard.css goal_sidebar.css )
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )
