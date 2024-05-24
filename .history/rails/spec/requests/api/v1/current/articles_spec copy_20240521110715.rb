end

describe "PATCH api/v1/current/articles" do
  subject { patch(api_v1_current_article_path(id), headers:, params:) }

  let(:headers) { current_user.create_new_auth_token }
  let(:current_user) { create(:user) }
  let(:other_user) { create(:user) }
  let(:params) { { "article": { "title": "テストタイトル2", "content": "テスト本文2", "status": "published" } } }

  context ":id がログインユーザーに紐づく articles レコードの id である時" do
    let(:current_user_article) { create(:article, title: "テストタイトル1", content: "テスト本文1", status: :draft, user: current_user) }
    let(:id) { current_user_article.id }

    it "正常にレコードを更新できる" do
      expect { subject }.to change { current_user_article.reload.title }.from("テストタイトル1").to("テストタイトル2") and
        change { current_user_article.reload.content }.from("テスト本文1").to("テスト本文2") and
        change { current_user_article.reload.status }.from("draft").to("published")
      res = JSON.parse(response.body)
      expect(res.keys).to eq ["id", "title", "content", "status", "created_at", "from_today", "user"]
      expect(res["user"].keys).to eq ["name"]
      expect(response).to have_http_status(:ok)
    end
  end

  context ":id がログインユーザーに紐づく articles レコードの id ではない時" do
    let(:other_user_article) { create(:article, user: other_user) }
    let(:id) { other_user_article.id }

    it "例外が発生する" do
      expect { subject }.to raise_error(ActiveRecord::RecordNotFound)
    end
  end
end
end
end
end
