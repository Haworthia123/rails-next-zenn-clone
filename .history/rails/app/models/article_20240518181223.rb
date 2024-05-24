class Article < ApplicationRecord
    belongs_to :user
    enum :status, { unsaved: 10, draft: 20, published: 30 }, _prefix: true
    #本文が空白のまま公開することはできない設定
    validates :title, :content, presence: true, if: :published?
    #一人のユーザが複数の未保存ステータス記事を保有することを防ぐルール
    validate :verify_only_one_unsaved_status_is_allowed
 
    private
 
      def verify_only_one_unsaved_status_is_allowed
        if unsaved? && user.articles.unsaved.present?
          raise StandardError, "未保存の記事は複数保有できません"
        end
      end
end
