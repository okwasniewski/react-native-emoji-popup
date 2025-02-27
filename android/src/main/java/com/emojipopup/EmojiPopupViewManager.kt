package com.emojipopup

import android.graphics.Color
import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.ViewManagerDelegate
import com.facebook.react.uimanager.annotations.ReactProp
import com.facebook.react.viewmanagers.EmojiPopupViewManagerInterface
import com.facebook.react.viewmanagers.EmojiPopupViewManagerDelegate

@ReactModule(name = EmojiPopupViewManager.NAME)
class EmojiPopupViewManager : SimpleViewManager<EmojiPopupView>(),
  EmojiPopupViewManagerInterface<EmojiPopupView> {
  private val mDelegate: ViewManagerDelegate<EmojiPopupView>

  init {
    mDelegate = EmojiPopupViewManagerDelegate(this)
  }

  override fun getDelegate(): ViewManagerDelegate<EmojiPopupView>? {
    return mDelegate
  }

  override fun getName(): String {
    return NAME
  }

  public override fun createViewInstance(context: ThemedReactContext): EmojiPopupView {
    return EmojiPopupView(context)
  }

  @ReactProp(name = "color")
  override fun setColor(view: EmojiPopupView?, color: String?) {
    view?.setBackgroundColor(Color.parseColor(color))
  }

  companion object {
    const val NAME = "EmojiPopupView"
  }
}
