# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
Rails.application.config.assets.precompile += %w( jquery.tubular.1.0.js greetings.js wrapper.js goal_sidebar.js )
Rails.application.config.assets.precompile += %w( chessboard-0.3.0.min.js chessboard_config.js board_colors.js )
Rails.application.config.assets.precompile += %w( stockfish.js stockfish_config.js stockfish_settings.js chess.min.js book.bin )
Rails.application.config.assets.precompile += %w( chessboard.css goal_sidebar.css )
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )
